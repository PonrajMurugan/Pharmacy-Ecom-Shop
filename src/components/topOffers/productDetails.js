import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';
import './productDetails.css';

const productDetails = [
    {
        id: 1,
        image: "https://static2.medplusmart.com/products/_bdbd530_/LITT0024_S.jpg",
        brand: "PIRAMAL PHARMA LIMITED",
        product: "LITTLES BABY WIPES 80S",
        price: 95,
        saves: "Save 50%",
        seller:"Seller Information",
        sellerInfo:"Manufactured By",
        sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
        packed:"Packed By",
        packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",


      },
      {
        id: 2,
        image: "https://static2.medplusmart.com/products/_113277b_/HUGG0194_S.jpg",
        brand: "KIMBERLY CLARK INDIA PVT LTD",
        product: "HUGGIES JUMBO PACK M 120S",
        price: 1649,
        saves: "Save 5%",
        seller:"Seller Information",
        sellerInfo:"Manufactured By",
        sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
        packed:"Packed By",
        packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      },
      {
        id: 3,
        image: "https://static2.medplusmart.com/products/_7976e44_/HUGG0140_S.jpg",
        brand: "KIMBERLY CLARK INDIA PVT LTD",
        product: "HUGGIES WONDER PANTS DIAPER L64",
        price: 1195,
        saves: "Save 5%",
        seller:"Seller Information",
        sellerInfo:"Manufactured By",
        sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
        packed:"Packed By",
        packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      },
      {
        id: 4,
        image: "https://static2.medplusmart.com/products/_52269b_/PAMP0087_S.jpg",
        brand: "PROCTOR AND GAMBLE HOME",
        product: "PAMPERS PANTS NEW BABY 86S",
        price: 1039,
        saves: "Save ₹ 260",
        seller:"Seller Information",
        sellerInfo:"Manufactured By",
        sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
        packed:"Packed By",
        packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      },
      {
        id: 5,
        image: "https://static2.medplusmart.com/products/_a14dc9_/PAMP0175_S.jpg",
        brand: "PROCTOR AND GAMBLE HOME",
        product: "PAMPERS PANT XL56S",
        price: 1139,
        saves: "Save ₹ 260",
        seller:"Seller Information",
        sellerInfo:"Manufactured By",
        sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
        packed:"Packed By",
        packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      }
 
];

const ProductDetails = () => {
    const { id } = useParams();
    const product = productDetails.find(p => p.id === parseInt(id));
    const dispatch = useDispatch();
  
    if (!product) {
      return <div className="not-found">Product not found</div>;
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
      };
  
    return (
      <div className="product-details-container">
        <div className="product-header">
          <h1>{product.product}</h1>
        </div>
        <div className="product-content">
          <div className="product-image">
            <img src={product.image} alt={product.product} />
          </div>
          <div className="product-info">
            <p><strong>Brand:</strong> {product.brand}</p>
            <p><strong>Price:</strong> ₹ {product.price}</p>
            <p style={{color:"green"}}> {product.saves}</p>
            <button
                className="btn btn-danger"
                onClick={(e) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add Cart
              </button>
            
            <div className="delivery-info">
              {/* <h2>Delivery Information</h2>  */}
              <div className="delivery-item">
                <img src="https://img.icons8.com/ios-filled/50/000000/truck.png" alt="Delivery Truck" />
                <div>
                  <p><strong>Delivered By:</strong> {product.sellerInfo}</p>
                  <p>{product.sellerInfo2}</p>
                </div>
              </div>
              <div className="delivery-item">
                <img src="https://img.icons8.com/ios-filled/50/000000/package.png" alt="Package" />
                <div>
                  <p><strong>Packed By:</strong> {product.packed}</p>
                  <p>{product.packedInfo}</p>
                </div>
              </div>
              <div className="delivery-item">
                <img src="https://img.icons8.com/ios-filled/50/000000/clock.png" alt="Delivery Time" />
                <div>
                  <p><strong>Estimated Delivery Time:</strong></p>
                  <p>3-5 Business Days</p>
                </div>
              </div>
              <div className="delivery-item">
                <img src="https://img.icons8.com/ios-filled/50/000000/return.png" alt="Return Policy" />
                <div>
                  <p><strong>Return Policy:</strong></p>
                  <p>30-Day Return Policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductDetails;