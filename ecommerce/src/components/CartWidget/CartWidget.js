import React, {useContext} from 'react'
import {BsBag} from "react-icons/bs";
import './CartWidget.scss'
import { CartContext } from '../../context/CartContext';

export const CartWidget = () => {
    const {totalCount} = useContext(CartContext)
    return (
        <div>
            <BsBag id='bag'/>
            <span>{totalCount()}</span>

        </div>

    )
}

export default CartWidget;
