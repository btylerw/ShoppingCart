import { Link } from "react-router-dom"
import '../styles/Navbar.css'
import { ShoppingCart } from "./ShoppingCart";
import shoppingCart from './assets/cart-icon.svg'

const Navbar = () => {
    return (
        <nav>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">
                    <img src={shoppingCart} className="cart" alt=""/>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;