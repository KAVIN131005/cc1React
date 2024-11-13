import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check login state from localStorage
        const userLoggedIn = localStorage.getItem('isLoggedIn');
        if (userLoggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Clear login state and localStorage on logout
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    return (
        <header className="header">
            <nav className="navbar">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/about" className="nav-link">About Us</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                {/* Conditionally render the Login or Logout link based on login state */}
                {!isLoggedIn ? (
                    <Link to="/login" className="nav-link">Login</Link>
                ) : (
                    <span className="nav-link" onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
                )}
            </nav>
        </header>
    );
}

export default Header;
