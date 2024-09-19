import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="contact-footer">
            <div className="contact-footer-container">
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>If you have any questions or need assistance, feel free to reach out to us:</p>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Tirunelveli Main Road Tenkasi</span>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt"></i>
                            <span>+91 86818 57753</span>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <span>support@medplus.com</span>
                        </li>
                    </ul>
                </div>
                <div className="contact-social">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="contact-hours">
                    <h3>Business Hours</h3>
                    <p>Monday - Friday: 9 AM - 6 PM</p>
                    <p>Saturday: 10 AM - 4 PM</p>
                    <p>Sunday: 10 AM - 1 PM</p> 
                </div>
            </div>
        </footer>
    );
};

export default Footer;
