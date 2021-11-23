import React from 'react'
import './ItemDetail.scss'
import {RiShareLine} from "react-icons/ri";
import {ItemCount} from '../ItemCount/ItemCount'
import {BsHeart} from "react-icons/bs";

export const ItemDetail = ({item}) => {
    console.log(item.title)
    

    return (
        <div className='container in-bl'>

                <img src={item.imgsrc} className="img" alt={item.title}/>
                <div className=''>
                    <h1 className='name'>{item.title}</h1>
                    <h2 className='colorway'>{item.colorway}</h2>
                    <h3 className='reviews'> ️‍🔥 {item.reviews}</h3>
                </div>
                <div className=''>
                    <h3 className='price'>${item.price}</h3>
                    <button className='add-item'>Add To Bag</button>
                    <ItemCount available={item.stock} initial={1} />
                    <h3 className='availability'>Stock available: {item.stock}</h3>
                </div>
                <div className=''>
                    <BsHeart className='wishlist'/>
                    <RiShareLine className='share'/>
                </div>

        </div>
    )
}
