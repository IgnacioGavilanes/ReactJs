import {useState, useContext} from 'react'
import './ItemDetail.scss'
import {RiShareLine} from "react-icons/ri";
import {ItemCount} from '../ItemCount/ItemCount'
import {BsHeart} from "react-icons/bs";
import {Link} from 'react-router-dom'
import {CartContext} from '../../context/CartContext';

export const ItemDetail = ({id, imgsrc, title, colorway, msrp, price, reviews, stock}) => {
    
    //Usando intercabiabilidad ponemos este state en itemDetail en vez de itemCount para 
    //asi nosotros poder manejar count en este componente y mas abajo agregar una funcion
    //para poder agregar elementos al carrito de compras.
    const [count, setCount] = useState(0)
    const[inCart, setInCart] = useState(false)

    const {addToCart, removeFromCart, clear, isInCart} = useContext(CartContext)


    const handleAddToCart = () => {

        if (count > 0) {

            addToCart({
                id,
                imgsrc,
                title,
                colorway,
                price,
                count,
            })
            setInCart(true)
        } 
    }

    return (
        <div className='container'>
                <div className='img-container flex-child'>
                    <img src={imgsrc} className="img" alt={title}/>
                    <img src={imgsrc} className="img" alt={title}/>
                </div>
                <div className='data-container flex-child'>
                    <span className=''>
                        <h1 className='name'>{title}</h1>
                        <h2 className='colorway'>
                            {colorway}
                        </h2>
                    </span>

                    <h3 className={msrp > price ? 'price discounted':'price'}>${price}</h3>
                    {msrp > price && <h3 className='previous-price'>${msrp}</h3>}
                    <span className='green-box'></span>

                    {
                        !isInCart(id)
                        ?   <>
                                <ItemCount 
                                    available={stock} 
                                    count={count} 
                                    setCount={setCount} 
                                    handleAddToCart={handleAddToCart}
                                />
                                <h3 className='availability'>Stock available: {stock}</h3>
                                <span className='icons'>
                                    <BsHeart className='wishlist'/>
                                    <h3 className='reviews'> ️‍🔥 {reviews}</h3> 
                                    <RiShareLine className='share'/>
                                    <button className='size-dropdown'> Select Size</button>
                                </span> 
                            </>
                        :   
                            <div className='response-btns'>
                                <Link to='/cart' className='checkout-btn'> Checkout </Link>
                                <Link to='/' className='home-btn'> Continue Shopping </Link>
                            </div>
                    }
                    
                </div>
        </div>
    )
}
