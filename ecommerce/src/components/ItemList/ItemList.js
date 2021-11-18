import React from 'react'
import './ItemList.scss'
import {Item} from '../Item/Item'

export const ItemList = ({items}) => {

    return (
        <div className='grid'>
            {items.map((products) => <Item key={products.id} {...products}/>)}            
        </div>
    )
}
