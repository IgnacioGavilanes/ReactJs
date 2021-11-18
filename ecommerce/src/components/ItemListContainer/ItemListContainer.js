import React, {useState, useEffect} from 'react';
import './ItemListContainer.scss';
// import {ItemCount} from '../ItemCount/ItemCount';
import {ItemList} from "../ItemList/ItemList"
import {getData} from '../../helpers/getData';

export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        getData()
            .then( (response) => {
                setProducts(response)
                console.log(response) 
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                console.log('finally')
                setLoading(false)
            })
    }, [])


    return (
        <div>
            {/* <ItemCount stock={10} initial={1}/> */}
            <h1 className='products-title'>Products:</h1>

            {
                loading 
                    ? <h3 className='loader'> Loading...</h3> 
                    : 
                    <ItemList items={products}/>
            }
        </div>
    )
}