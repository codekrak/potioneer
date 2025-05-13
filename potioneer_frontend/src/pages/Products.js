import React, { useEffect, useState } from "react";
import './Products.css';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/products/")
            .then(response => response.json())
            .then(data => {
                console.log("Data from backend:", data);
                setProducts(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        existingCart.push(product);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        alert(`${product.name} has been added to the cart!`);
    };

    return (
        <div className="product-list">
            {products.length > 0 ? (
                products.map(product => (
                    <div key={product.id} className="product-item">
                        <div className="product-content">
                            <img
                                src={product.image || '/path/to/placeholder-image.png'}
                                alt={product.name}
                                className="product-image"
                            />
                            <div className="product-details">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <p>Price: ${product.price}</p>
                                <button
                                    className="add-to-cart-button"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
}

export default Products;
