import React, {useState, useEffect} from 'react';
import './ItemListContainer.scss';
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
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (
        <div>
            <h1 className='products-title'>Products:</h1>

            {
                loading 
                    ? <h3 className='loader'> Loading...</h3> 
                    : <ItemList items={products}/>
            }
            
        </div>
    )
}