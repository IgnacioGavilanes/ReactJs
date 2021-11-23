import './App.scss';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import {ItemDetailContainer} from'./components/ItemDetailContainer/ItemDetailContainer';

function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/detail' element={<ItemDetailContainer/>} />
          < Route path='*' element={<Navigate to='/'/>}/>
          
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
