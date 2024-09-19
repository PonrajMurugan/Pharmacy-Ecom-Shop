import React from 'react';
import './healthyLife.css';

const HealthyLife = () => {
    return (
        <div  data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine" className="healthy-life-container">
            <div className="healthy-life-content">
                <div className="healthy-life-text">
                    <h6>Information You Can Use for a</h6>
                    <h3>HEALTHY LIFE</h3>
                    <p className="highlight-text">Almost All Medicines We Take Are Generic!</p>
                    <p>Health and medicines are very sensitive subjects; and when it comes to these, everybody is extra cautious. We trust branded medicines and doctor-prescribed medicines without a second thought.</p>
                </div>

                <div className="healthy-life-image-container">
                    <img 
                        src="https://img.freepik.com/free-vector/illustration-happy-healthy-family_53876-37126.jpg?semt=ais_hybrid" 
                        alt="Healthy Life" 
                        className="healthy-life-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default HealthyLife;
