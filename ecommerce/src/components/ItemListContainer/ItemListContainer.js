import React, {useState, useEffect} from 'react';
import './ItemListContainer.scss';
import {ItemList} from "../ItemList/ItemList"
// import {getData} from '../../helpers/getData';
import { useParams } from 'react-router';
import {Contact} from '../Contact/Contact';
import {Footer} from '../Footer/Footer';
import { Loader } from '../Loader/Loader';
import {collection, getDocs, query, where} from 'firebase/firestore/lite';
import { db } from '../../firebase/config'


export const ItemListContainer = () => {

    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
        setLoading(true)
        // Genero referencia (asincrona)
        const itemsRef = collection(db, 'products')

        const q = categoryId ? query(itemsRef, where('category', '==', categoryId )) : itemsRef

        // Get la ref (docs, data, etc son metodos de firebase)
        getDocs(q)
            .then( (collection) => {
                //response = un snapshot de la coleccion (no array)
                const items = collection.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }))
                console.log(items)
                setProducts(items)
            })
            .catch ((error)=> {
                console.log(error)
            })
            .finally (()=> {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            {
                loading 
                    ? 
                        // <h3 className='loader'> 
                        //     Loading...
                        // </h3> 
                        <Loader/>
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