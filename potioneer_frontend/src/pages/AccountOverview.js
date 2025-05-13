import React from "react";
import "./AccountOverview.css"; // Create this CSS file for styling

function AccountOverview() {
    // Mock user data and order history for demonstration purposes
    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        membership: "Premium Member",
    };

    const orders = [
        { id: 1, item: "Not Your Mother's Laundry", price: 13.99, date: "2024-11-01" },
        { id: 2, item: "Out of this World", price: 13.99, date: "2024-11-05" },
    ];

    return (
        <div className="account-overview-page">
            <h1>Account Overview</h1>

            {/* User Information Section */}
            <div className="user-info">
                <h2>Welcome, {user.name}!</h2>
                <p>Email: {user.email}</p>
                <p>Membership: {user.membership}</p>
            </div>

            {/* Order History Section */}
            <div className="order-history">
                <h2>Order History</h2>
                {orders.length > 0 ? (
                    <table className="order-table">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.item}</td>
                                    <td>${order.price.toFixed(2)}</td>
                                    <td>{order.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>You have no orders yet.</p>
                )}
            </div>
        </div>
    );
}

export default AccountOverview;
