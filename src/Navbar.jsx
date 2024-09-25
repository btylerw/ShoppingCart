import { Link } from "react-router-dom"
import { useState } from "react";
import '../styles/Navbar.css'
import shoppingCart from './assets/cart-icon.svg'
import { DropdownMenu } from "./DropdownMenu";

const Navbar = () => {
    const [isDropDownVisible, setDropDownVisible] = useState(false);
    const handleMouseEnter = () => {
        setDropDownVisible(true);
      };
    
      const handleMouseLeave = () => {
        setDropDownVisible(false);
      };
    return (
        <nav>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                <Link to="/" style={{color: 'white'}}>Home</Link>
                <Link to="/shop" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{color: 'white', position: 'relative', display: 'inline-block'}}>
                    Shop
                    {isDropDownVisible && <DropdownMenu />}
                </Link>
                <Link to="/cart">
                    <img src={shoppingCart} className="cart" alt=""/>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;