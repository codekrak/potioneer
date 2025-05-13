import React, { useEffect, useState } from "react";
import './AdminPage.css';

function AdminPage() {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        // Fetch products
        fetch("http://127.0.0.1:8000/api/products/")
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching products:", error));

        // Fetch orders (replace with actual endpoint)
        fetch("http://127.0.0.1:8000/api/orders/")
            .then(response => response.json())
            .then(data => setOrders(data))
            .catch(error => console.error("Error fetching orders:", error));

        // Fetch subscriptions (replace with actual endpoint)
        fetch("http://127.0.0.1:8000/api/subscriptions/")
            .then(response => response.json())
            .then(data => setSubscriptions(data))
            .catch(error => console.error("Error fetching subscriptions:", error));
    }, []);

    return (
        <div className="admin-page">
            <h1>Admin Dashboard</h1>

            <section>
                <h2>Manage Products</h2>
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.name} - ${product.price}
                            <button>Edit</button>
                            <button>Delete</button>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Manage Orders</h2>
                <ul>
                    {orders.map(order => (
                        <li key={order.id}>
                            Order #{order.id} - Total: ${order.total}
                            <button>View Details</button>
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h2>Manage Subscriptions</h2>
                <ul>
                    {subscriptions.map(subscription => (
                        <li key={subscription.id}>
                            {subscription.plan_name} - {subscription.user}
                            <button>Cancel</button>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default AdminPage;
