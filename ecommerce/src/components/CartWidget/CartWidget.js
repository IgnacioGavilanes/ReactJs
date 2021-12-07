import React, {useContext} from 'react'
import {BsBag} from "react-icons/bs";
import './CartWidget.scss'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
    const {totalCount, cart} = useContext(CartContext)
    return (
        <div className={cart.length === 0 ? 'hidden widget' : 'widget'}>
            <Link to='/cart'>
                <BsBag id='bag'/>
                <span className={totalCount()===0 ? 'hidden widget' : 'widget'}>
                    <div className='circle-container'>
                        <p id='count'>{totalCount()}</p>
                    </div>
                </span>
            </Link>
        </div>
    )
}

export default CartWidget;