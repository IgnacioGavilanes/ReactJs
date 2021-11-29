import React from 'react'
import './ItemCount.scss';

export const ItemCount = ({available, count, setCount, handleAddToCart}) => {

    const incrementCount = () => {count < available && setCount(count + 1)}

    const decrementCount = () => {count > 0 && setCount(count - 1)}

    return (
        <div className='counter-container'>
            <div className='counter'>
                <div className='counter-btnwrapper'>
                    <button className='counter-button' onClick={incrementCount}>+</button>
                    <p className={count === available || count === 0 ? 'counter-number pulse' : 'counter-number'}>{count}</p>
                    <button className='counter-button' onClick={decrementCount}>-</button>
                </div>
            </div>
            <input type="button" value='Add To Bag' className='add-item' onClick={handleAddToCart}/>
        </div>
    )
}