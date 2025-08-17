import React, { useState } from "react";
import './Navbar.css';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Kids from '../components/kids/Kids';
import Students from '../components/students/Students';

import Accessories from '../components/Accessories/Accessories';
import Cart from '../components/cart/Cart';
import Product from '../components/products/Product';
import Sign from '../components/sign/Sign';
import fashionlogo from '../Assets/images/fashionlogo1.png';
import profile from '../Assets/images/profile.png'
import cart from '../Assets/images/cart.png';
import product from '../Assets/images/product.jpeg';
import sign from '../Assets/images/sign.png'

export default function Navbar() {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <BrowserRouter>
            <nav className="navbar">
                <img src={fashionlogo} alt="Logo" className="logo" />

                <div className="nav-links">
                    <Link to="/">Kids</Link>
                    <Link to="/Students">Students</Link>
                    
                    <Link to="/Accessories">Accessories</Link>
                </div>

                <div className="profile-menu" onClick={toggleDropdown}>
                    <img src={profile} alt="Profile" className="profile-icon" />
                    {showDropdown && (
                        <div className="dropdown">
                            <Link to="/cart">
                                <img src={cart} alt="Cart" className="dropdown-icon" />
                                Add to Cart
                            </Link>
                            <Link to="/my-products">
                                <img src={product} alt="My Products" className="dropdown-icon" />
                                My Products
                            </Link>
                            <Link to="/sign">
                                <img src={sign} alt="Sign In" className="dropdown-icon" />
                                Sign In
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Kids />} />
                <Route path="/Students" element={<Students />} />
                
                <Route path="/Accessories" element={<Accessories />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/my-products" element={<Product />} />
                <Route path="/Sign" element={<Sign />} />
            </Routes>
        </BrowserRouter >
    );
}
