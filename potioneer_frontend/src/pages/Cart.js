import React, { useState, useEffect } from 'react';
import './Cart.css';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCartItems);
    }, []);

    const handleRemoveItem = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2);
    };

    // Helper to normalize image paths
    const getImageUrl = (imagePath) => {
        if (!imagePath) return '/path/to/placeholder.png';
        return imagePath.startsWith('http') ? imagePath : `http://127.0.0.1:8000${imagePath}`;
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img
                                src={getImageUrl(item.image)}
                                alt={item.name}
                                className="cart-item-image"
                            />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>Price: ${item.price}</p>
                                <button onClick={() => handleRemoveItem(index)} className="remove-button">Remove</button>
                            </div>
                        </div>
                    ))}
                    <h2>Total: ${calculateTotal()}</h2>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default Cart;
