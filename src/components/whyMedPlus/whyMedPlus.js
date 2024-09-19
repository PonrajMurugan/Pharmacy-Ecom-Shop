import React from 'react';
import './whyMedPlus.css';

const WhyMedPlus = () => {
    return (
        <div  className="why-medplus-container container">
            <div className="why-medplus-header">
                <h1>WHY MEDPLUS MART</h1>
            </div>

            <div  data-aos="fade-down"
     data-aos-duration="3000" className="features-grid">
                <div className="feature-item">
                    <img 
                        src="https://static2.medplusmart.com/live/webpwa/assets/safe-and-secure.f87b9b29b201af66ef89.svg" 
                        alt="Safe & Secure" 
                        className="feature-icon" 
                    />
                    <h6>100% Safe & Secure</h6>
                    <p>We take all safety and hygiene measures to keep our customers safe.</p>
                </div>

                <div className="feature-item">
                    <img 
                        src="https://static2.medplusmart.com/live/webpwa/assets/online-reports.03fb335de31455e84d8f.svg" 
                        alt="Online Reports" 
                        className="feature-icon" 
                    />
                    <h6>Online Reports</h6>
                    <p>Get your reports online, anytime, anywhere.</p>
                </div>

                <div className="feature-item">
                    <img 
                        src="https://static2.medplusmart.com/live/webpwa/assets/home-sample-collection.513fdc0331c1185aa035.svg" 
                        alt="Home Sample Collection" 
                        className="feature-icon" 
                    />
                    <h6>Home Sample Collection</h6>
                    <p>Convenient at-home sample collection service.</p>
                </div>

                <div className="feature-item">
                    <img 
                        src="https://static2.medplusmart.com/live/webpwa/assets/compititive-prices.0424e317d16b7148a34b.svg" 
                        alt="Competitive Prices" 
                        className="feature-icon" 
                    />
                    <h6>Competitive Prices</h6>
                    <p>Get the best value for your money with our prices.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyMedPlus;
