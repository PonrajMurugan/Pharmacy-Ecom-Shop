import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';
import './topOffers.css';
import { useNavigate } from 'react-router-dom';

const offerProducts = [
  {
    id: 1,
    image: "https://static2.medplusmart.com/products/_bdbd530_/LITT0024_S.jpg",
    brand: "PIRAMAL PHARMA LIMITED",
    product: "LITTLES BABY WIPES 80S",
    price: 95,
    saves: "Save 50%"
  },
  {
    id: 2,
    image: "https://static2.medplusmart.com/products/_113277b_/HUGG0194_S.jpg",
    brand: "KIMBERLY CLARK INDIA PVT LTD",
    product: "HUGGIES JUMBO PACK M 120S",
    price: 1649,
    saves: "Save 5%"
  },
  {
    id: 3,
    image: "https://static2.medplusmart.com/products/_7976e44_/HUGG0140_S.jpg",
    brand: "KIMBERLY CLARK INDIA PVT LTD",
    product: "HUGGIES WONDER PANTS DIAPER L64",
    price: 1195,
    saves: "Save 5%"
  },
  {
    id: 4,
    image: "https://static2.medplusmart.com/products/_52269b_/PAMP0087_S.jpg",
    brand: "PROCTOR AND GAMBLE HOME",
    product: "PAMPERS PANTS NEW BABY 86S",
    price: 1039,
    saves: "Save ₹ 260"
  },
  {
    id: 5,
    image: "https://static2.medplusmart.com/products/_a14dc9_/PAMP0175_S.jpg",
    brand: "PROCTOR AND GAMBLE HOME",
    product: "PAMPERS PANT XL56S",
    price: 1139,
    saves: "Save ₹ 260"
  }
];

const TopOffers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = (productId) => {
    navigate(`/details/${productId}`);
    window.scrollTo(0, 0); 
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="top-offers-container">
      <div className="top-offers-header">
        <h1>Top Offers</h1>
      </div>

      <div data-aos="fade-down" className="offers-grid">
        {offerProducts.map((product) => (
          <div
            className="offer-card"
            key={product.id}
            onClick={() => handleCardClick(product.id)}
          >
            <div className="offer-image">
              <img src={product.image} alt={product.product} />
            </div>
            <div className="offer-details">
              <h2 className="offer-product">{product.product}</h2>
              <p className="offer-brand">{product.brand}</p>
              <p className="offer-price">₹ {product.price}</p>
              <p className="offer-saves">{product.saves}</p>
              <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopOffers;