import React from 'react';
import './bannerThree.css'

const BannerThree = () => {
    return (
        <div>
            <div data-aos="zoom-in-left" className='ban-three container'>
                <img src='https://static2.medplusmart.com/live/bannerImage/Mart/b803beb1e459deafa7a27bc63c970b02.png' alt='banner' />
            </div>

            <div  data-aos="zoom-in-right" className='ban-three'>
                <img src='https://static2.medplusmart.com/live/bannerImage/Mart/dbb9a1214479f5e1890889c2302528f9.jpg' alt='banner' />
            </div>

            <div data-aos="zoom-in-left" className='ban-three container'>
                <img src='https://static2.medplusmart.com/live/bannerImage/Mart/cc2824593905aa4d845d9f10b7d4fefa.jpg' alt='banner' />
            </div>

            <div  data-aos="zoom-in-right" className='ban-three'>
                <img src='https://static2.medplusmart.com/live/bannerImage/Mart/468439502ea424a4b6bcf7c75e15e12e.jpg' alt='banner' />
            </div>
            
        </div>
    );
};

export default BannerThree;