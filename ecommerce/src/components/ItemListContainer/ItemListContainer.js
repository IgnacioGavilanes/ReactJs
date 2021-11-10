import React from 'react';
import './ItemListContainer.scss';


export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className='placeholder'>
                {greeting}
            </h1>
        </div>
    )
}
