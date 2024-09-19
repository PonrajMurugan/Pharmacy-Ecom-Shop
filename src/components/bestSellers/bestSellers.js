import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../Redux/action';
import './bestSellers.css';

const bestProducts = [
  {
    id: 1,
    image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APP0070_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
    brand: 'MEDPLUS HEALTH',
    product: 'ULETHON 55GM SPRAY',
    price: 199,
    saves: 'Save Upto 20%',
  },
  {
    id: 2,
    image: 'https://images.apollo247.in/pub/media/catalog/product/n/i/niv0123_2_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
    brand: 'NIVEA INDIA PVT LTD',
    product: 'NIVEA MEN FRESH DEODRANT',
    price: 228,
    saves: 'Save 20%',
  },
  {
    id: 3,
    image: 'https://images.apollo247.in/pub/media/catalog/product/V/A/VAS0057_1-AUG23_1.jpg?tr=w-250,q-80,f-webp,dpr-2.0000000298023224,c-at_max',
    brand: 'HUL',
    product: 'VASELINE DAILY BRIGHTENING',
    price: 369,
    saves: 'Save 15%',
  },
  {
    id: 4,
    image: 'https://images.apollo247.in/pub/media/catalog/product/l/a/lak0731_1.jpg?tr=w-250,q-80,f-webp,dpr-2.0000000298023224,c-at_max',
    brand: 'HUL',
    product: 'LAKME BLUSH BERRY GEL',
    price: 182,
    saves: 'Save 30%',
  },
  {
    id: 5,
    image: 'https://images.apollo247.in/pub/media/catalog/product/I/O/IOD0040_1-AUG23_1.jpg?tr=w-250,q-80,f-webp,dpr-2.0000000298023224,c-at_max',
    brand: 'GLAXOSMITHKLINE',
    product: 'IODEX RAPID SPRAY 60ML',
    price: 199,
    saves: 'Save 5%',
  },
  {
    id: 6,
    image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APH0081_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
    brand: 'APOLLO',
    product: 'HAND SANITIZER LIQUID',
    price: 309,
    saves: 'Save 15%',
  },
  {
    id: 7,
    image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APS0087_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
    brand: 'APOLLO',
    product: 'SUNSCREAM WITH SPF 15',
    price: 299,
    saves: 'Save 5%',
  },
  {
    id: 8,
    image: 'https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210109_164109__front__travel_neck_pillow_microbeads.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
    brand: 'APOLLO',
    product: 'TRAVEL NECK PILLOW',
    price: 500,
    saves: 'Save 5%',
  },
];

const BestSellers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/productDetails/${productId}`);
    window.scrollTo(0, 0); 
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div  data-aos="fade-up"  className="best-sellers-container">
      <div className="best-sellers-header">
        <h1>Best Sellers</h1>
      </div>
      <div className="product-grid container">
        {bestProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleCardClick(product.id)}
          >
            <img src={product.image} alt={product.product} className="product-image" />
            <div className="product-info">
              <h2 className="product-brand">{product.brand}</h2>
              <p className="product-name">{product.product}</p>
              <p className="product-price">₹ {product.price}</p>
              <p className="product-saves">{product.saves}</p>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;





