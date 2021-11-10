import React, {useState} from 'react'
import './ItemCount.scss';

export const ItemCount = ({stock, initial}) => {

    const [count, setCount] = useState(initial)

    const incrementCount = () => {count < stock ? setCount(count + 1) : setCount(count)}

    const decrementCount = () => {count > 1 ? setCount(count - 1): setCount(count)}

    return (
        <div className='counter'>
            <p className={count === 10 || count === 1 ? 'counter-number pulse' : 'counter-number'}>{count}</p>
            <div className='counter-btnwrapper'>
                <button className='counter-button' onClick={incrementCount}>+</button>
                <button className='counter-button' onClick={decrementCount}>-</button>
            </div>
        </div>
    )
}