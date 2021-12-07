import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from'./components/ItemDetailContainer/ItemDetailContainer';
import {CartView} from '../src/components/CartView/CartView';
import {WishlistView} from '../src/components/WishlistView/WishlistView';
import {CartProvider} from './context/CartContext';
import {Checkout} from './components/Checkout/Checkout';

function App() {
  
  return (
    <div className="app">
      <CartProvider>
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
            <Route path='/checkout' element={<Checkout/>} />
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
