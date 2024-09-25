import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GetProducts from './GetProducts'
import Navbar from './NavBar';
import './App.css'
import ErrorPage from './ErrorPage';

function App() {  
  return (
    <>
      <Navbar />
      <div className="home-container" style={{color: 'black'}}>
        <h1>This is the home page!</h1>
      </div>
    </>

  )
}


export default App



