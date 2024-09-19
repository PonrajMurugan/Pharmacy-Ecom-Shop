import React from 'react';
import './medplusAdvantage.css';

const MedplusAdvantage = () => {
    return (
        <div>
            <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active c-img">
                        <img src="https://static2.medplusmart.com/live/bannerImage/Labs/f97dfded24bdb40fb6a0724b3945cc9f.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item c-img">
                        <img src="https://static2.medplusmart.com/live/bannerImage/Labs/475e9deeaa5fb3ee10e96d400817469e.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item c-img">
                        <img src="https://static2.medplusmart.com/live/bannerImage/Labs/d4c93e61069f6b5a85db912b52fa9046.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>

            <div className='header-container'>
    <h1>MedPlus Advantage – Healthcare plans for your family</h1>
    <h6>One Card – 3 benefits</h6>
</div>

<div className='benefits-container container'>
    <div className='benefit-item'>
        <img src='https://static2.medplusmart.com/live/webpwa/assets/surprise_coupon_icn.4d167df6116beaab602d.png' alt='photos' />
        <p>Free Diagnostic Tests at MRP, worth your card fee</p>
    </div>

    <div className='benefit-item'>
        <img src='https://static2.medplusmart.com/live/webpwa/assets/pathology_icn.ba2a15b41c51aeb5e54e.png' alt='photos' />
        <p>Flat 75% discount on all diagnostic tests, health profiles and preventive health check-up packages</p>
    </div>

    <div className='benefit-item'>
        <img src='https://static2.medplusmart.com/live/webpwa/assets/doctor_consultation_icn.8809b64a7c7e78ea5a02.png' alt='photos' />
        <p>Flat 50% discount on all online & offline consultations with MedPlus In-house doctors</p>
    </div>
</div>
      
<div className='plans-container'>
    <h1 className='main-title'>SELECT A MEDPLUS ADVANTAGE PLAN</h1>
    <div className='plans'>
        <div className='plan'>
            <h5 className='plan-title'>Health Care Services</h5>
            <h5 className='plan-name'>Plan</h5>
            <h5 className='plan-price'>$1149</h5>
            <ul className='plan-details'>
                <li>Covers One Adult at $1149</li>
                <li>Add up to Three Adults at $500 Each</li>
                <li>Add up to Three Children at $150 Each</li>
                <li>Benefits for One Year</li>
            </ul>
            <button className='btn btn-primary'>Buy Now</button>
        </div>

        <div className='plan'>
            <h5 className='plan-title'>Health Care Services</h5>
            <h5 className='plan-name'>Plan 3 Years</h5>
            <h5 className='plan-price'>$3399</h5>
            <ul className='plan-details'>
                <li>Covers One Adult at $3399</li>
                <li>Add up to Three Adults at $1500 Each</li>
                <li>Add up to Three Children at $450 Each</li>
                <li>Benefits for Three Years</li>
            </ul>
            <button className='btn btn-primary'>Buy Now</button>
        </div>
    </div>
</div>




            
        </div>
    );
};

export default MedplusAdvantage;