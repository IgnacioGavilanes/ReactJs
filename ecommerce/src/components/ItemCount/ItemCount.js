import React, {useState} from 'react'
import './ItemCount.scss';

export const ItemCount = ({available, initial}) => {

    const [count, setCount] = useState(initial)

    const incrementCount = () => {count < available ? setCount(count + 1) : setCount(count)}

    const decrementCount = () => {count > initial ? setCount(count - 1): setCount(count)}

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