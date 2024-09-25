import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import { useCart } from "./CartContext";
import '../styles/GetProducts.css';

function GetProducts() {
    const [products, setProducts] = useState([]);
    const [update, setUpdate] = useState(false);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const increaseQuantity = (product) => {
        console.log(product.quantity);
        product.quantity += 1;
        setUpdate(!update);
    }

    const reduceQuantity = (product) => {
        if (product.quantity > 1) {
            product.quantity -= 1;
        }
        setUpdate(!update);
    }

    const getQuantity = (product) => {
        return product.quantity;
    }
    
    // Creates elements that will display our product information and map the data accordingly
    const createImages = products.map((product, key) => {
        console.log(product);
        return (
            <div key={key} className="product">
                <img src={product.image} style={{height: '200px', width: '200px'}} alt="" />
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
                <div className="quant-button">
                    <button onClick={() => reduceQuantity(product)}>-</button>
                    <h4>{getQuantity(product)}</h4>
                    <button onClick={() => increaseQuantity(product)}>+</button>
                </div>
                <button style={{backgroundColor: 'white', color: 'black'}} onClick={() => {addToCart(product)}}>Add To Cart</button>
            </div>
        )
    })

    return (
        <>
            <Navbar />
            <div className="productGrid">{createImages}</div>
        </>
    )
}

export default GetProducts;