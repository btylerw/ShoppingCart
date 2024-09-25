import { createContext, useState, useContext } from "react";

// Creating the context to use for our app
const CartContext = createContext();

export function CartProvider({ children }) {
    // Holds all of the items in our cart
    const [cartItems, setCartItems] = useState([]);
    // Tells us how many unique items are in our cart
    const [cartAmount, setCartAmount] = useState(0);

    // If an item is in our cart, we increase the quanity
    // Otherwise we simply add the item to our cart
    function addToCart(product) {
        setCartItems(previousCart => {
            const prodExists = cartItems.find(item => item.id === product.id);
            if (prodExists) {
                return previousCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + product.quantity} : item);
            } else {
                return [...previousCart, product];
            }
        });
        setCartAmount(cartAmount+product.quantity);
    }

    // Removes an item from our cart entirely
    function removeFromCart(product) {
        const updatedCart = cartItems.filter(item => item.id != product.id);
        setCartAmount(cartAmount - product.quantity);
        setCartItems(updatedCart);
    }

    // Gives us the total current price of our cart
    function calculatePrice() {
        const total = cartItems.reduce((total, item) => total + (item.price) * (item.quantity), 0).toFixed(2);
        return total;
    }

    return (
        <CartContext.Provider value={{ cartItems, cartAmount, addToCart, calculatePrice, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook needed to access our cart information
export function useCart() {
    return useContext(CartContext);
}