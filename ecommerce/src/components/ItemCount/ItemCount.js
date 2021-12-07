import React from 'react'
import { btnConfig } from './btnConfig';
import './ItemCount.scss';

export const ItemCount = ({available, count, setCount, handleAddToCart}) => {

    

    const incrementCount = () => {count < available && setCount(count + 1)}

    const decrementCount = () => {count > 0 && setCount(count - 1)}

    const config = btnConfig(count, available, incrementCount, decrementCount)

    return (
        <div className='counter-container'>
            <div className='counter'>
                <div className='counter-btnwrapper'>
                    {/* <button className={count === available ? 'counter-button no-stock' : 'counter-button'} disabled={count===available} onClick={incrementCount}>+</button> */}
                    <button {...config.add}>+</button>
                    {/* <p className={count === available || count === 0 ? 'counter-number pulse' : 'counter-number'}>{count}</p> */}
                    <p {...config.number}>{count}</p>
                    {/* <button className={count === 0 ? 'counter-button no-stock' : 'counter-button'} disabled={count===0} onClick={decrementCount}>-</button> */}
                    <button {...config.subtract}>-</button>
                </div>
            </div>
            <input type="button" value='Add To Bag' className='add-item' onClick={handleAddToCart}/>
        </div>
    )
}