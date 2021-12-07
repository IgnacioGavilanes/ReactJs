import {createContext, useState} from 'react'

export const CartContext = createContext()

//Custom provider 
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
  
    const addToCart = (product) => {
      setCart([...cart, product])
    }
  
    const removeFromCart = (id) => {
      setCart(cart.filter(product => product.id !== id))
    }
  
    const clear = () => {
      setCart([])
    }
  
    const isInCart = (id) => {
      return cart.some(product => product.id === id)
    }
  
    const totalCount = () => {
      return cart.reduce((accumulator, product) => accumulator + product.count, 0)
    }

    const totalPrice = () => {
        return cart.reduce((accumulator, product) => (accumulator + (product.price * product.count)), 0)
    }

    return ( 
        <CartContext.Provider value={{
        cart, 
        addToCart,
        removeFromCart,
        clear,
        isInCart,
        totalCount,
        totalPrice
      }}>
          {children}
        </CartContext.Provider>
    )
}