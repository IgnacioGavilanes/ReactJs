import {useState} from 'react'
import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from'./components/ItemDetailContainer/ItemDetailContainer';
import {CartView} from '../src/components/CartView/CartView';
import {WishlistView} from '../src/components/WishlistView/WishlistView';
import {CartContext} from './context/CartContext';


function App() {

  const [cart, setCart] = useState([])
  console.log(cart);

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
    const counter = cart.reduce((accumulator, product) => accumulator + product.count, 0)
    if (counter!== 0) {return counter}
    else {return null} 
  //   return cart.reduce((accumulator, product) => accumulator + product.count, 0)
  // }
  }
  console.log(totalCount())

  
  return (
    <div className="app">
      <CartContext.Provider value={{
        cart, 
        addToCart,
        removeFromCart,
        clear,
        isInCart,
        totalCount
      }}>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/products/:categoryId' element={<ItemListContainer/>} />
            <Route path='/detail' element={<ItemDetailContainer/>} />
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} />
            <Route path='*' element={<Navigate to='/'/>}/>
            <Route path='/cart' element={<CartView/>} />
            <Route path='/wishlist' element={<WishlistView/>} />
          </Routes>
          
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
