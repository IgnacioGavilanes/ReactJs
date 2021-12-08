import React, { useContext } from 'react'
import { FiTrash } from "react-icons/fi";
import { CartContext } from '../../context/CartContext';
import './CartView.scss'
import {BsHeart} from "react-icons/bs";


export const CartItem = ({rightImgsrc, title, id, colorway, count, price}) => {

    const {removeFromCart, totalPrice} = useContext(CartContext)
    return (
        <div >
            <div className='cart-container'>
                <img src={rightImgsrc} alt='item' className='cart-img'></img>
                <div>
                    <h2 className='cart-name'>{title}</h2>
                    <h3  className='cart-colorway'>{colorway}</h3>
                </div>
                <div>
                    <h3 className='count'> x  {count}</h3>
                </div>
                <div>
                    <h2 className='cart-price'>${price}</h2>
                </div>
                <div>
                {/* TENGO QUE PASAR UN CALLBACK DE ESTA MANERA PARA PODER LLAMAR A LA FUNCION 
                CON EL REMOVEFROMCART CON EL ID DEL ITEM SOBRE EL CUAL ESTOY MAPEANDO */}
                    <button onClick={() => {removeFromCart(id)}} className='delete'>
                        <FiTrash id='trash'/>
                    </button>
                    <button className='heart'>
                        <BsHeart id='heart-icon'/>
                    </button>
                </div>
            </div>
            <hr className='separator'/>
        </div>
                
    )
}
