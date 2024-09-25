import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GetProducts from './GetProducts'
import Navbar from './NavBar';
import './App.css'
import ErrorPage from './ErrorPage';

function App() {  
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <>
      <Navbar />
        <h1>This is the home page!</h1>
        <div>Your Shopping Cart has: {shoppingCart.length} items</div>
    </>

  )
}


export default App



