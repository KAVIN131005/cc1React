import React, { useContext } from 'react';
import { BusContext } from '../BusContext'; // Import the BusContext
import './Home.css';

function Home() {
    const { busDetails, bookBus } = useContext(BusContext); // Consume the context

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Bus Ticket Reservation</h1>
                <p>Find and book your bus tickets easily</p>
            </header>
            <main className="home-main">
                <div className="search-container">
                    <div className="search-fields">
                        <input type="text" placeholder="From (e.g., New York)" className="search-input" />
                        <input type="text" placeholder="To (e.g., Boston)" className="search-input" />
                        <input type="date" className="search-input" />
                        <button className="search-button">Search Buses</button>
                    </div>
                </div>
                <h2>Available Buses</h2>
                <div className="bus-list">
                    {busDetails.map(bus => (
                        <div className="bus-card" key={bus.id}>
                            <div className="bus-info">
                                <p><strong>Departure:</strong> {bus.departure}</p>
                                <p><strong>Arrival:</strong> {bus.arrival}</p>
                                <p><strong>From:</strong> {bus.start}</p>
                                <p><strong>To:</strong> {bus.end}</p>
                                <p>
                                    <strong>Available Seats:</strong> {bus.availableSeats > 0 ? bus.availableSeats : <span className="no-seats">No more seats available</span>}
                                </p>
                            </div>
                            {bus.availableSeats > 0 && (
                                <button className="book-button" onClick={() => bookBus(bus.id)}>Confirm Booking</button>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <footer className="footer-container">
                <p>Contact us: <a href="mailto:support@example.com">support@example.com</a></p>
                <p>Phone: (123) 456-7890</p>
                <div className="footer-links">
                    <a href="#about-us">About Us</a>
                    <a href="#faqs">FAQs</a>
                    <a href="#terms">Terms & Conditions</a>
                    <a href="#privacy">Privacy Policy</a>
                </div>
                <div className="footer-socials">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
