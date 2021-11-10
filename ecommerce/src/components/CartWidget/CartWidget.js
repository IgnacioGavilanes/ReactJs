import React from 'react'
import {BsBag} from "react-icons/bs";
import './CartWidget.scss'

export const CartWidget = () => {
    return (
        <a href='.#'>
            <BsBag id='bag'/>
        </a>
    )
}

export default CartWidget;
