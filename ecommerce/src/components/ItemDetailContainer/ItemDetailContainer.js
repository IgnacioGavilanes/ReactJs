import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.scss'
import {ItemDetail}  from '../ItemDetail/ItemDetail';
// import {getData} from '../../helpers/getData';
import { useParams } from 'react-router';
import {Footer} from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
import {doc, getDoc, collection} from 'firebase/firestore/lite';
import { db } from '../../firebase/config'

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productDetail, setProductDetail] = useState([])

    //capturo el id de la url por params
    const {productId} = useParams()

    useEffect(() => {
        setLoading(true)
        const productsRef = collection(db, 'products')
        const docRef = doc(db, 'products', productId)
        getDoc(docRef)
            .then((doc) => {
                setProductDetail({
                    id: doc.id,
                ...doc.data()
                })
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
        
    }, [productId])

    return (
        <div>            
            {
                loading 
                    ? <Loader/> 
                    : 
                    <>
                        <h1 className='title'>Product Detail:</h1>
                        <hr className='divider'/>
                        <ItemDetail {...productDetail}/>
                        <Footer/>
                    </>
            }
        </div>
    )
}
