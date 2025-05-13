import React from "react";
import './App.css';
import logo from './logo.png'; // Logo Image
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Products from './pages/Products';
import Subscriptions from './pages/Subscriptions';
import AccountOverview from './pages/AccountOverview';
import AdminPage from './pages/AdminPage';
import Cart from './pages/Cart';

function App() {
    return (
        <Router>
            <div className="App">
                <img src={logo} alt="The Potioneer Logo" className="logo" />

                {/* Navigation Bar */}
                <nav className="nav-bar">
                    <Link to="/products" className="nav-link">Products</Link>
                    <Link to="/subscriptions" className="nav-link">Subscriptions</Link>
                    <Link to="/account-overview" className="nav-link">Account Overview</Link>
                    <Link to="/admin" className="nav-link">Admin</Link>
                    <Link to="/cart" className="nav-link">Cart</Link>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/products" element={<Products />} />
                    <Route path="/subscriptions" element={<Subscriptions />} />
                    <Route path="/account-overview" element={<AccountOverview />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
