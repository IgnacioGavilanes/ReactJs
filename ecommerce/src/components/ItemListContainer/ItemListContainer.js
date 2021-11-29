import React, {useState, useEffect} from 'react';
import './ItemListContainer.scss';
import {ItemList} from "../ItemList/ItemList"
import {getData} from '../../helpers/getData';
import { useParams } from 'react-router';
import {Contact} from '../Contact/Contact';
import {Footer} from '../Footer/Footer';


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        getData()
            .then( (response) => {
                if (!categoryId) {
                    setProducts(response)
                }
                else {
                    setProducts(response.filter(prod => prod.category === categoryId))
                }
                
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            <h1 className='products-title'>Products:</h1>

            {
                loading 
                    ? 
                        <h3 className='loader'> 
                            Loading...
                        </h3> 
                    : 
                        <>
                            <ItemList items={products}/>
                            <hr className='divider'/>
                            <Contact/>
                            <Footer/>
                        </>
            }

        </div>
    )
}