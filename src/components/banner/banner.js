import React from 'react';
import Slider from 'react-slick';
import './banner.css'

const images = [
  'https://static2.medplusmart.com/live/bannerImage/Mart/b3c92c5938860376ea344c1e6b8981ee.jpg',
  'https://static2.medplusmart.com/live/bannerImage/Mart/fc14a94000c5b274db40967c7bcccb35.jpg',
  'https://static2.medplusmart.com/live/bannerImage/Mart/a8194abfbe14bf6621eb0a0af0398946.jpg',
  'https://static2.medplusmart.com/live/bannerImage/Mart/3c4bc696cc8d3302566735ef0211ae99.jpg',
  'https://static2.medplusmart.com/live/bannerImage/Mart/9aaa8367930c5ee794d249f24ff34b2d.jpg',
  'https://static2.medplusmart.com/live/bannerImage/Mart/7297908683514ecd062d44c9378740dc.jpg',
  'https://static2.medplusmart.com/live/bannerImage/Mart/24244e7d65ad94239a09a1d48a37889b.jpg'
];

const Banner   = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true, 
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
