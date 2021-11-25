import React from 'react'
import './ItemDetail.scss'
import {RiShareLine} from "react-icons/ri";
import {ItemCount} from '../ItemCount/ItemCount'
import {BsHeart} from "react-icons/bs";

export const ItemDetail = ({imgsrc, title, colorway, msrp, price, reviews, stock}) => {

    return (
        <div className='container'>
                <div className='img-container flex-child'>
                    <img src={imgsrc} className="img" alt={title}/>
                    <img src={imgsrc} className="img" alt={title}/>
                </div>
                <div className='data-container flex-child'>
                    <span className=''>
                        <h1 className='name'>{title}</h1>
                        <h2 className='colorway side-by-side'>
                            {colorway} 
                            <h3 className='reviews side-by-side'> ️‍🔥 {reviews}</h3> 
                        </h2>
                    </span>
                    <span className=''>
                        <h3 className={msrp > price ? 'price discounted':'price'}>${price}</h3>
                        {msrp > price && <h3 className='previous-price'>${msrp}</h3>}
                        <input type="button" value='Add To Bag' className='add-item'/>
                        <ItemCount available={stock} initial={1} />
                        <h3 className='availability'>Stock available: {stock}</h3>
                    </span>
                    <span className='icons'>
                        <BsHeart className='wishlist'/>
                        <RiShareLine className='share'/>
                    </span>
                </div>
        </div>
    )
}
