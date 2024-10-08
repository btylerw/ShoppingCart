import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./NavBar";
import { useCart } from "./CartContext";
import '../styles/GetProducts.css';

function GetProducts() {
    const [products, setProducts] = useState([]);
    const [update, setUpdate] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const state = location.state;


    // Getting cart info from Cart Context
    const { cartItems, cartAmount, addToCart, calculatePrice } = useCart();

    // API request to retrieve all of our product information.
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json => setProducts(json.map(item => ({...item, quantity: 1}))))
                .catch((error) => setError(error))
                .finally(setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error loading screen</p>

    // Changes quantity of a product
    const changeQuantity = (product, change) => {
        if (change === 'increase') {
            setProducts(products.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item))
        } else {
            const canDecrease = products.find(item => item.id === product.id  && product.quantity > 1);
            if (canDecrease) {
                setProducts(products.map(item => item.id === product.id ? {...item, quantity: item.quantity -1} : item))
            }
            
        }
    }
    // Creates elements that will display our product information and map the data accordingly
    const createImages = products.map((product, key) => {
        let canWrite = true;
        if (state.category && state.category != product.category) {
            canWrite = false;
        }
        if (canWrite) {
            return (
                <div key={key} className="product">
                    <img src={product.image} style={{height: '200px', width: '200px'}} alt="" />
                    <h4>{product.title}</h4>
                    <h4>${product.price.toFixed(2)}</h4>
                    <div className="quant-button-container">
                        <button className="quant-button" onClick={() => changeQuantity(product, 'decrease')}>-</button>
                        <h4>{product.quantity}</h4>
                        <button className="quant-button" onClick={() => changeQuantity(product, 'increase')}>+</button>
                    </div>
                    <button style={{backgroundColor: 'white', color: 'black'}} onClick={() => {addToCart(product)}}>Add To Cart</button>
                </div>
            );
        } else {
            return;
        }
    })

    return (
        <>
            <Navbar />
            <div className="shop-container">
                <div className="productGrid">{createImages}</div>
            </div>
        </>
    )
}

export default GetProducts;