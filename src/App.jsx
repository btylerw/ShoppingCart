import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import GetProducts from './GetProducts'
import HomePage from './HomePage';
import Navbar from './NavBar';
import './App.css'
import ErrorPage from './ErrorPage';

function App() {  
  return (
    <>
      <Navbar />
    </>
  )
}


export default App



