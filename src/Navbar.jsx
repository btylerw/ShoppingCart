import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
        </>
    );
};

export default Navbar;