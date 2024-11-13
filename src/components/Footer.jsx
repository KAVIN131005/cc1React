import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-info">
                    <h3>BusEase</h3>
                    <p>Your reliable bus booking system for comfortable and affordable travel.</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact</a>
                        <a href="/faqs">FAQs</a>
                    </nav>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: support@busease.com</p>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/twitter.svg" alt="Twitter" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} BusEase. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
