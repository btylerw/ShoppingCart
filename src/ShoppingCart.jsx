import { useState } from "react";
import Navbar from "./NavBar";
import { useCart } from "./CartContext";
import '../styles/ShoppingCart.css';

export const ShoppingCart = () => {
    const { cartItems, cartAmount, addToCart, calculatePrice, removeFromCart } = useCart();
    
    // Creates an element for each item in our shopping cart
    const showCart = cartItems.map((item) => {
        return (
            <>
            <div className="cart-items">
                <img className="cart-image" src={item.image} alt="" />
                <h3 style={{color: 'black'}}>{item.title}</h3>
                <h3 style={{color: 'black'}}>{item.price}</h3>
                <h3 style={{color: 'black'}}>Quantity: {item.quantity}</h3>
                <button style={{backgroundColor: 'red'}} onClick={() => removeFromCart(item)}>Remove Item</button>
            </div>
            </>
        )
    });

    return (
        <>
            <Navbar />
            <div className="cart-container">
                <div className="cartGrid">{cartAmount ? showCart : "Your cart is empty!"}</div>
                <h2 style={{color: 'black'}}>Total Price: ${calculatePrice()}</h2>
            </div>
        </>
    )
}