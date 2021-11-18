import React from 'react'
import './Item.scss'
import {BsHeart} from "react-icons/bs";
import {BsBag} from "react-icons/bs";

export const Item = ({id, imgsrc, title, colorway, price, reviews}) => {

    return (
        <div className='card' id={id}>
             <img src={imgsrc} className="img" alt={title}/>
             <h1 className="name">{title}</h1>
             <h3 class="colorway">{colorway}</h3>
             <BsHeart className='add-wishlist itemcontainer'/>
             {/* <input type="image" src="img/in-wishlist.svg" className="itemcontainer add-wishlist" /> */}
             <h2 className="price itemcontainer">$ {price}</h2>
             <BsBag className='add-cart itemcontainer'/>
             {/* <input type="image" src="img/in-bag.svg" className="itemcontainer add-bag"/> */}
             <p className="reviews"> ${reviews} 🔥</p>
        </div>
        
    )
}
