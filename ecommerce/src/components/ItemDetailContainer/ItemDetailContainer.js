import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.scss'
import {ItemDetail}  from '../ItemDetail/ItemDetail';
import {getData} from '../../helpers/getData';
import { useParams } from 'react-router';
import {Footer} from '../Footer/Footer';

export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [productDetail, setProductDetail] = useState([])

    const {productId} = useParams()

    useEffect(() => {
        setLoading(true)
        getData()
            .then( (response) => {
                setProductDetail(response.find(product => product.id === Number(productId)) )
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
            <h1 className='title'>Product Detail:</h1>
            <hr className='divider'/>
            {
                loading 
                    ? <h3 className='loader'> Loading...</h3> 
                    : 
                    <>
                        <ItemDetail {...productDetail}/>
                        <Footer/>
                    </>
            }
        </div>
    )
}
