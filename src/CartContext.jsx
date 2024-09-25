import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);

    function addToCart(product) {
        setCartItems([...cartItems, product]);
        setCartAmount(cartAmount + 1);
    }

    function removeFromCart(product) {
        const updatedCart = cartItems.filter(item => item.id != product.id);
        setCartAmount(cartAmount - 1);
        setCartItems(updatedCart);
    }

    function calculatePrice() {
        const total = cartItems.reduce((total, item) => total + (item.price), 0).toFixed(2);
        return total;
    }

    return (
        <CartContext.Provider value={{ cartItems, cartAmount, addToCart, calculatePrice, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}