import React from 'react';
import './shopByCategory.css';
import { useNavigate } from 'react-router-dom';

const ShopByCategory = () => {

    const navigate = useNavigate();

    const handlePharmacyClick = () => {
        navigate('/pharmacy'); 
        window.scrollTo(0, 0);
    };

    const handleDiagnosticsClick = () => {
        navigate('/diagnosis'); 
        window.scrollTo(0, 0);
    };

    const handleDoctorClick = () => {
        navigate('/doctor');
        window.scrollTo(0, 0); 
    };

    const handleMedAdvantageClick = () => {
        navigate('/MedplusAdvantage'); 
        window.scrollTo(0, 0);
    };

    const handleMedplusFactory = () => {
        navigate('/MedplusFactory'); 
        window.scrollTo(0, 0);
    };

    return (
        <div className="shop-category-container">
            <div className="shop-category-header">
                <h1>SHOP BY CATEGORY</h1>
            </div>

            <div  data-aos="fade-up" className="category-grid">
                <div className="category-item" onClick={handlePharmacyClick}>
                    <img src='https://static2.medplusmart.com/live/webpwa/images/common/new-pharmacy-cat-icn.png' alt='Pharmacy' />
                    <p>Pharmacy</p>
                </div>
                <div className="category-item" onClick={handleDiagnosticsClick}>
                    <img src='https://static2.medplusmart.com/live/webpwa/images/common/new-lab-tests-cat-icn.png' alt='Lab Tests' />
                    <p>Diagnostics</p>
                </div>
                <div className="category-item" onClick={handleDoctorClick }>
                    <img src='https://static2.medplusmart.com/live/webpwa/images/common/new-doctors-cat-icn.png' alt='Doctors' />
                    <p>Doctors</p>
                </div>
                <div className="category-item" onClick={handleMedAdvantageClick}>
                    <img src='https://static2.medplusmart.com/live/webpwa/images/common/new-medplus-advantage-cat-icn.png' alt='Advantage' />
                    <p>MedPlus Advantage</p>
                </div>
                <div className="category-item" onClick={handleMedplusFactory}>
                    <img src='https://static2.medplusmart.com/live/bannerImage/Mart/858f53ec817a8eefa21ac701034c2d15.png' alt='Banner' />
                    <p>Factory Direct</p>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategory;
