import React, {useContext} from 'react'
import './CartView.scss'
// import {Link} from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import {CartItem} from './CartItem'
import { Link } from 'react-router-dom'
import {BsArrowRightCircle} from 'react-icons/bs'

// import {CartItem}

export const CartView = () => {

    const {cart, clear, totalPrice, price, count} = useContext(CartContext)

    

    return (
        <div>
            <section>
                {cart.length > 0
                ?
                    <>
                        <h1 className='cart-title'>Your Cart:</h1>
                        {cart.map((item) => (<CartItem key={item.id} {...item}/>))}
                        <h2 className='total-price'>Total: $ {totalPrice()}</h2>
                        <button onClick={clear}>Empty Cart</button>
                        <Link to='/checkout'><button>Go to Payment Method</button></Link>
                    </>
                :
                    <div className='empty-cart-container'>
                        <h1 className='empty-cart'>Your Cart is Empty...</h1>
                        <Link to='/' className='homepage'>Browse our Catalog <BsArrowRightCircle className='icon'/></Link>
                    </div>
                } 
                
                    
            </section>
        </div>
    )
}
