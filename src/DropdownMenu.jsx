import { Link } from 'react-router-dom';
import '../styles/DropdownMenu.css';

export const DropdownMenu = () => {
    return (
        <>
        <ul className="dropdown-menu">
            <Link to="/shop" state={{ category: "electronics"}}>Electronics</Link>
            <Link to="/shop" state={{ category: "jewelery" }}>Jewelry</Link>
            <Link to="/shop" state={{ category: "men's clothing" }}>Men's Clothing</Link>
            <Link to="/shop" state={{ category: "women's clothing" }}>Women's Clothing</Link>
        </ul>
        </>
    )
}