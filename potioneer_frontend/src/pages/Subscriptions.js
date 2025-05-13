import React from "react";
import "./Subscriptions.css"; // CSS file for styling

function Subscriptions() {
    const subscriptionPlans = [
        {
            id: 1,
            name: "Basic Potion Kit",
            description: "A selection of starter potions perfect for beginners.",
            price: 19.99,
        },
        {
            id: 2,
            name: "Advanced Potion Kit",
            description: "Potions for intermediate alchemists with a knack for exploration.",
            price: 39.99,
        },
        {
            id: 3,
            name: "Master Alchemist Kit",
            description: "Premium potions and rare ingredients for true masters of the craft.",
            price: 59.99,
        },
    ];

    return (
        <div className="subscriptions-page">
            <h1>Subscription Plans</h1>
            <p>Choose a subscription plan to enhance your magical experience.</p>
            <div className="subscriptions-grid">
                {subscriptionPlans.map((plan) => (
                    <div key={plan.id} className="subscription-box">
                        <h3>{plan.name}</h3>
                        <p>{plan.description}</p>
                        <p className="price">Price: ${plan.price.toFixed(2)} / month</p>
                        <button className="add-to-cart-button">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Subscriptions;
