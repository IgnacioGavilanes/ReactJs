import React, {useState, useEffect} from 'react';
import './ItemDetailContainer.scss'
import {ItemDetail}  from '../ItemDetail/ItemDetail';
import {getData} from '../../helpers/getData';
import { useParams } from 'react-router';
import {Footer} from '../Footer/Footer';
import { Loader } from '../Loader/Loader';

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
            {
                loading 
                    ? <Loader/> 
                    : 
                    <>
                        <h1 className='title'>Product Detail:</h1>
                        <hr className='divider'/>
                        <ItemDetail {...productDetail}/>
                        <Footer/>
                    </>
            }
        </div>
    )
}
