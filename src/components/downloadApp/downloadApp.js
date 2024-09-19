import React from 'react';
import './downloadApp.css';

const DownloadApp = () => {
    return (
        <section className="download-app">
            <div   className="download-app-container">
                <div className="download-app-image">
                    <img src="https://static2.medplusmart.com/live/webpwa/assets/download-app.3bd6c30cfa0c34643e3f.png" alt="Download App" />
                </div>
                <div className="download-app-qr">
                    <img src="https://static2.medplusmart.com/live/webpwa/assets/medplusQR.8d6a73db4c25e95b67f7.png" alt="QR Code" />
                </div>
                <div className="download-app-info">
                    <h5>Download Our App Now</h5>
                    <p>Buy general store products and medicines from</p>
                    <p>your mobile at anytime, anywhere</p>
                    <p>Available on:</p>
                    <div className="download-app-stores">
                        <img src="https://static2.medplusmart.com/live/webpwa/assets/Google_Play_Store-cssbg.5e8a3ffbb5024c236295.svg" alt="Google Play Store" />
                        <img src="https://static2.medplusmart.com/live/webpwa/assets/App_Store-cssbg.7cefae321292192d26cb.svg" alt="App Store" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;
