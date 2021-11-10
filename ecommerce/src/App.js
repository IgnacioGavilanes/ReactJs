import './App.scss';
import {NavBar} from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'

function App() {
  
  const message = 'Welcome To Our Store! Our site is under construction. This may take a while...'

  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greeting={message}/>
    </div>
  );
}

export default App;
