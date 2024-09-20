import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/shop">Shop</Link>
            </div>
        </>
    );
};

export default Navbar;