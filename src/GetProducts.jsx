import { useEffect, useState } from "react";

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
            <div key={key}>
                <img src={product.image} alt="" />
            </div>
        )
    })
    return (
        <>
            <div>{createImages}</div>
        </>
    )
}

export default GetProducts;