import React from 'react';
import './ItemListContainer.scss';
import {ItemCount} from '../ItemCount/ItemCount';


export const ItemListContainer = ({greeting}) => {

    return (
        <div>
            <ItemCount stock={10} initial={1}/>
            <h1 className='placeholder'>
                {greeting}
            </h1>
        </div>
    )
}
