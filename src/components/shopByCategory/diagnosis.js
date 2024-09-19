import React from 'react';
import './diagnosis.css';


const popularChechups = [
    {
        id: 1,
        about: "3T - MRI KNEE LEFT",
        mPrice: 3500,
        price: 14000,
        sample: "Sample Collection Option",
        lab: "Lab Walk In",
    },
    {
        id: 2,
        about: "3T - MRI CERVICAL SPINE",
        mPrice: 2500,
        price: 9300,
        sample: "Sample Collection Option",
        lab: "Lab Walk In",
    },
    {
        id: 3,
        about: "BLOOD GLUCOSE FASTING",
        mPrice: 35,
        price: 140,
        sample: "Sample Collection Option",
        lab: "Lab Walk In",
    },
    {
        id: 4,
        about: "X-RAY PARANASAL SINUSES",
        mPrice: 152,
        price: 161,
        sample: "Sample Collection Option",
        lab: "Lab Walk In",
    },
    {
        id: 5,
        about: "3T MRI LUMBER SPINE",
        mPrice: 2300,
        price: 9300,
        sample: "Sample Collection Option",
        lab: "Lab Walk In",
    },
    {
        id: 6,
        about: "RHEUMATOID FAC SERUM",
        mPrice: 165,
        price: 660,
        sample: "Sample Collection Option",
        lab: "Lab Walk In",
    },
    {
        id: 7,
        about: "CHOLESTEROL TEST",
        mPrice: 95,
        price: 380,
        sample: "Sample Collection Option",
        lab: "Lab Walk In",
    },
    {
        id: 8,
        about: "CT BRAIN",
        mPrice: 950,
        price: 3840,
        sample: "Sample Collection Option",
        lab: "Lab Walk In",
    },
];

const Diagnosis = () => {
    return (
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

            <div className="popular-checkups-container">
                <h4 className="popular-checkups-title">Popular Check Ups</h4>
                <div className="popular-checkups-list">
                    {popularChechups.map(checkup => (
                        <div key={checkup.id} className="checkup-item">
                            <h5>{checkup.about}</h5>
                            <p><strong>MRP : </strong> ₹ {checkup.mPrice}</p>
                            <p><strong>Price : </strong> ₹ {checkup.price}</p>
                            <p><strong></strong> {checkup.sample}</p>
                            <p><strong></strong> {checkup.lab}</p>
                            <button className='btn btn-danger'>Add Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Diagnosis;
