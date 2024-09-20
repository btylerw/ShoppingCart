import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GetProducts from './GetProducts'
import HomePage from './HomePage';
import './App.css'
import ErrorPage from './ErrorPage';

function App() {

  const { page } = useParams();
  
  return (
      <div>
          <Link to="/shop">Shop</Link>
          <Link to="/home">Home</Link>
          {page === "shop" ? (
              <GetProducts />
          ) : page === "home" ? (
              <HomePage />
          ) : (
              <GetProducts />
          )}
      </div>
  )
}


export default App



