import { useContext, useState } from 'react'
import './Checkout.scss'
import {SuccessGif} from './SuccessGif'
import { CartContext } from '../../context/CartContext'
import Swal from 'sweetalert2'
import {validateForm} from '../../helpers/validateForm.js'
import { collection, Timestamp, query, where, documentId, writeBatch, getDocs, addDoc } from 'firebase/firestore/lite'
import {db} from '../../firebase/config'
import { Navigate } from 'react-router-dom'

export const Checkout = () => {

    const {cart, totalPrice, clear} = useContext(CartContext)

    const[values, setValues] = useState({
        name:'',
        email:'',
        emailConfirm:''
    })

    const batch = writeBatch(db)

    const handleInputChange = (event) => {
        setValues({
            ...values, 
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(validateForm(values)) {return}

        const order = {
            client: {...values},
            items: cart,
            total: totalPrice(),
            date: Timestamp.fromDate(new Date())
        }

        const productsRef = collection(db, 'products')

        // cart.forEach((product) => {
        //     const docRef = doc(productsRef, product.id)
        //     getDoc(docRef)
        //         .then((doc) => {
        //             updateDoc(doc.ref, {
        //                 stock: doc.data().stock - product.count
        //             })
        //         })
        // })

        const orderRef = collection(db, "orders")
        const q = query(productsRef, where(documentId(), 'in', cart.map(element => element.id)))

        const outOfStock = []

        const products = await getDocs(q)

        products.docs.forEach((doc) => {

            const itemToUpdate = cart.find((prod) => prod.id === doc.id)

            if (doc.data().stock >= itemToUpdate.count) { //is it count though?

                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.count
                })
            } else {
                outOfStock.push(itemToUpdate)
            }
        })

        if (outOfStock.length === 0 ) {            
            addDoc(orderRef, order)
            .then((response) => {
                batch.commit()

                //ORDER COMPLETED
                Swal.fire({
                    position:'bottom-end',                
                    title: 'Thank you for your order!',
                    text:`Your order number is ${response.id}`,
                    toast:true,
                    icon: 'success',
                    background: 'white',
                    showConfirmButton: false,
                    timer: 2000,})
            })
            clear() //vacia el carrito luego de que se efectue la orden
        } else {
            console.log(outOfStock)
            //ORDER DID NOT GO THROUGH
            Swal.fire({
                position:'bottom-end',                
                title: 'The following items are out of stock:',
                text:`${outOfStock.map(element => element.title).join(', ')}`,
                toast:true,
                icon: 'error',
                background: 'white',
                showConfirmButton: false,
                timer: 2000,})
        }
    }

    return (
        <>
            {cart.length === 0 ? <Navigate to='/'/> :
                <div className='gif-testing'>
                    {/* <SuccessGif/> */}
                    <div className='contact-section'>
                        <form onSubmit={handleSubmit} id='contactForm'>
                            <h2 className='sub-title'>Contact us</h2>
                            <label for='name'>Name</label>
                            <input 
                                id='name' 
                                onChange={handleInputChange}
                                name='name'
                                value={values.name}
                                type='text'
                                placeholder='name'
                            />
                        
                            <label for='email'>Email</label>
                            <input 
                                id='email' 
                                onChange={handleInputChange}
                                name='email'
                                value={values.email}
                                type='email'
                                placeholder='email'
                            />
                            <label for='emailConfirm'>Confirm Email</label>
                            <input 
                                id='email' 
                                onChange={handleInputChange}
                                name='emailConfirm'
                                value={values.emailConfirm}
                                type='email'
                                placeholder='email'
                            />
                            {values.emailConfirm.length !== values.email.length && <small>Email no coincide</small>}
                            <input 
                                className='submit-form'
                                type='submit'
                            />
                        </form>
                    </div>
                </div>
            }
        </>
    )
}