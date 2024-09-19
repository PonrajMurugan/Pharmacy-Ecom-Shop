import React from 'react';
import './doctor.css';

const items = [
  { icon: 'fa-solid fa-user-doctor', text: 'Gen Medicine' },
  { icon: 'fa-regular fa-clipboard', text: 'Int Medicine' },
  { icon: 'fa-solid fa-baby', text: 'Peadiatrics' },
  { icon: 'fa-solid fa-cubes-stacked', text: 'Diabtetology' },
  { icon: 'fa-solid fa-heart-circle-bolt', text: 'Cardiology' },
  { icon: 'fa-solid fa-lungs', text: 'Pulmunary' },
  { icon: 'fa-regular fa-fingerprint', text: 'Orthopaedics' },
  { icon: 'fa-regular fa-hand', text: 'Dermatology' },
  { icon: 'fa-solid fa-virus', text: 'Infectious' },
  { icon: 'fa-solid fa-hand-dots', text: 'Allergy' },
  { icon: 'fa-solid fa-lungs-virus', text: 'Respiratory' },
  { icon: 'fa-solid fa-bone', text: 'Trauma' },
  { icon: 'fa-solid fa-heart-circle-bolt', text: 'TB Chest' },
  { icon: 'fa-solid fa-user-doctor', text: 'Gen Physician' },
  { icon: 'fa-solid fa-user-doctor', text: 'Sr Consultant ' },
  { icon: 'fa-solid fa-user-doctor', text: 'DNB Family' },
];

const Doctor = () => {
    return (
        <div>
            <div className='image-container'>
                <img src='https://static2.medplusmart.com/live/bannerImage/Doctors/ac47429b97460bc4c8aebe7fa9a5a358.jpg' alt='ban' />
                <img src='https://static2.medplusmart.com/live/bannerImage/Doctors/da259a33aa04cdb081014cf350471b2a.jpg' alt="ban" />
            </div>

            <div className='container'>
                <h1 className='doctor-title'>BY SPECIALIZATION</h1>

                <div className='items-container'>
                    {items.map((item, index) => (
                        <div className='item' key={index}>
                            <i className={item.icon}></i>
                            <p style={{color:"green"}}><strong>{item.text}</strong></p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctor;
