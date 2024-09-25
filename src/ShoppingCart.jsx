import { useState } from "react";
import Navbar from "./NavBar";
import { useCart } from "./CartContext";

export const ShoppingCart = () => {
    const { cartItems, cartAmount, addToCart, calculatePrice, removeFromCart } = useCart();
    const showCart = cartItems.map((item) => {
        return (
            <>
                <div style={{color: 'black'}}>{item.title}</div>
                <div style={{color: 'black'}}>{item.price}</div>
                <button style={{backgroundColor: 'red'}} onClick={() => removeFromCart(item)}>Remove Item</button>
            </>
        )
    })
    return (
        <>
            <Navbar />
            <h1 style={{color: 'black'}}>{cartAmount ? showCart : "Your cart is empty!"}</h1>
            <h2 style={{color: 'black'}}>Total Price: ${calculatePrice()}</h2>
        </>
    )
}