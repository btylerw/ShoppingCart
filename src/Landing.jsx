import { useParams } from "react-router-dom";
import App from "./App";
import GetProducts from "./GetProducts";
import HomePage from "./HomePage";
import Navbar from "./NavBar";

const Landing = () => {
    const { name } = useParams();
    return (
        <>
            <Navbar />
            {name === "shop" ? (
                <GetProducts />
            ) : name === "home" ? (
                <HomePage />
            ) : (
                <App />
            )}
        </>
    );
};

export default Landing;