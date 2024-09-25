import { useEffect, useState } from "react";
import Navbar from "./NavBar";
import '../styles/GetProducts.css';

function GetProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json => setProducts(json))
                .catch((error) => setError(error))
                .finally(setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error loading screen</p>

    const createImages = products.map((product, key) => {
        return (
            <div key={key} className="product">
                <img src={product.image} style={{height: '200px', width: '200px'}} alt="" />
                <h3>{product.title}</h3>
                <h4>${product.price}</h4>
                <button style={{backgroundColor: 'white', color: 'black'}}>Add To Cart</button>
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