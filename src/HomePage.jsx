import { useState } from "react";

const HomePage = () => {
    // comment for git push test
    const [shoppingCart, setShoppingCart] = useState([]);
    return (
        <>
            <h1>This is the home page!</h1>
            <div>Your Shopping Cart has: {shoppingCart.length} items</div>
        </>

    )
};

export default HomePage;