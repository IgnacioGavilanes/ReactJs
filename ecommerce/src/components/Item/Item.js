import React from 'react'
import './Item.scss';
import {Link} from 'react-router-dom'

// import {BsHeart} from "react-icons/bs";
// import {BsBag} from "react-icons/bs";

export const Item = ({id, imgsrc, title, colorway, price, reviews}) => {

    return (
        <Link to={`/detail/${id}`} className='wrapper'>
            <div className='card' id={id}>
                <img src={imgsrc} className="img" alt={title}/>
                <h1 className="name">{title}</h1>
                <h3 class="colorway">{colorway}</h3>
                {/* <BsHeart className='add-wishlist itemcontainer'/> */}
                <h2 className="price itemcontainer">$ {price}</h2>
                {/* <BsBag className='add-cart itemcontainer'/> */}
                <p className="reviews"> {reviews} 🔥</p>
            </div>
        </Link>
        
    )
}
