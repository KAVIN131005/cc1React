import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            <div className="about-header">
                <h2>About Us</h2>
                <p>Learn more about our mission, history, services, and team.</p>
            </div>
            <section className="about-section">
                <h3>Our Mission</h3>
                <p>
                    At BusEase, our mission is to provide safe, comfortable, and affordable bus travel across various cities. 
                    We are committed to delivering exceptional service with a focus on customer satisfaction.
                </p>
            </section>
            <section className="about-section">
                <h3>Company History</h3>
                <p>
                    Founded in 2005, BusEase has grown from a small local bus service into a leading provider of intercity travel. 
                    With a fleet of modern buses and a dedicated team, we have been serving travelers with top-notch amenities and excellent service.
                </p>
            </section>
            <section className="about-section">
                <h3>Our Services</h3>
                <ul>
                    <li>Comfortable Seating: Our buses are designed for maximum comfort with spacious seats and ample legroom.</li>
                    <li>Air Conditioning: Enjoy a cool and pleasant journey regardless of the weather outside.</li>
                    <li>Onboard Entertainment: Stay entertained with our onboard entertainment systems, including movies, music, and Wi-Fi.</li>
                    <li>24/7 Customer Support: Our customer support team is available around the clock to assist with any inquiries or issues.</li>
                </ul>
            </section>
            <section className="about-section">
                <h3>Our Fleet</h3>
                <p>
                    We operate a diverse fleet of modern buses, ranging from standard coaches to luxury buses. 
                    Each vehicle is regularly maintained to ensure safety and reliability, equipped with the latest amenities for a comfortable journey.
                </p>
            </section>
            <section className="about-section">
                <h3>Meet Our Team</h3>
                <div className="team-container">
                    <div className="team-member">
                        <img src="/path/to/kumar-photo.jpg" alt="Kumar" className="team-photo" />
                        <div className="team-info">
                            <h4>Kumar - Owner</h4>
                            <p>
                                Kumar is the visionary behind BusEase, dedicated to providing excellent service and expanding our reach. 
                                With years of experience in the transportation industry, Kumar ensures that our operations run smoothly and that our customers are satisfied.
                            </p>
                        </div>
                    </div>
                    <div className="team-member">
                        <img src="/path/to/kavin-photo.jpg" alt="Kavin" className="team-photo" />
                        <div className="team-info">
                            <h4>Kavin - Driver</h4>
                            <p>
                                Kavin is one of our experienced drivers, known for his professionalism and commitment to passenger safety. 
                                With a friendly attitude and excellent driving skills, Kavin contributes to making every journey pleasant and secure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-section">
                <h3>Customer Testimonials</h3>
                <div className="testimonials">
                    <blockquote>
                        <p>"BusEase provided an excellent travel experience. The bus was clean, comfortable, and the staff was friendly. I would definitely recommend them!" - Jane Doe</p>
                    </blockquote>
                    <blockquote>
                        <p>"The booking process was smooth, and the journey was pleasant. I appreciated the onboard entertainment and the comfortable seating." - John Smith</p>
                    </blockquote>
                </div>
            </section>
            {/* Background Animation Elements */}
            
        </div>
    );
}

export default About;
