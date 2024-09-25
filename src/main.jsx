import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { CartProvider } from './CartContext.jsx'
import App from './App.jsx'
import routes from './routes.jsx'
import './index.css'

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
)
