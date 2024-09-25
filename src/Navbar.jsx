import { Link } from "react-router-dom"
import '../styles/Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
        </nav>
    );
};

export default Navbar;