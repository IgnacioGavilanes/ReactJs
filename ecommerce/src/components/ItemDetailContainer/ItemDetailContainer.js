import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.scss'
import {ItemDetail}  from '../ItemDetail/ItemDetail';
import {getOneItem} from '../../helpers/getOneItem';

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productDetail, setProductDetail] = useState([])

    useEffect(() => {
        setLoading(true)
        getOneItem()
            .then( (response) => {
                setProductDetail(response)
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
    console.log(productDetail)
    return (
        <div>
            <h1 className='title'>Product Detail:</h1>
            <hr className='divider'/>
            {
                loading 
                    ? <h3 className='loader'> Loading...</h3> 
                    : <ItemDetail item={productDetail}/>
            }
        </div>
    )
}
