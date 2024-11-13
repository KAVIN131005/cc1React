import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-info">
                <div className="contact-item">
                    <h3>Driver: Kavin</h3>
                    <p>Phone: 123-456-7890</p>
                </div>
                <div className="contact-item">
                    <h3>Owner: Kumar</h3>
                    <p>Phone: 098-765-4321</p>
                </div>
            </div>
            <div className="contact-form">
                <h3>Get in Touch</h3>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                    
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                    
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4" placeholder="Enter your message"></textarea>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="contact-map">
                <h3>Find Us</h3>
                <iframe 
                    title="Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151!2d144.95373631590428!3d-37.816279679751364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sVictoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1615764809833!5m2!1sen!2sus" 
                    width="100%" 
                    height="250" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"></iframe>
            </div>
            {/* Background Animation Elements */}
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
        
        </div>
    );
}

export default Contact;
