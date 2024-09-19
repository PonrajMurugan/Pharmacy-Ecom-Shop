import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';
import '../topOffers/productDetails.css';

const productDetailss = [
    {
      id: 1,
      image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APP0070_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
      brand: 'MEDPLUS HEALTH',
      product: 'ULETHON 55GM SPRAY',
      price: 199,
      saves: 'Save Upto 20%',
      seller:"Seller Information",
      sellerInfo:"Manufactured By",
      sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      packed:"Packed By",
      packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
    },
    {
      id: 2,
      image: 'https://images.apollo247.in/pub/media/catalog/product/n/i/niv0123_2_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
      brand: 'NIVEA INDIA PVT LTD',
      product: 'NIVEA MEN FRESH DEODRANT',
      price: 228,
      saves: 'Save 20%',
      seller:"Seller Information",
      sellerInfo:"Manufactured By",
      sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      packed:"Packed By",
      packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
    },
    {
      id: 3,
      image: 'https://images.apollo247.in/pub/media/catalog/product/V/A/VAS0057_1-AUG23_1.jpg?tr=w-250,q-80,f-webp,dpr-2.0000000298023224,c-at_max',
      brand: 'HUL',
      product: 'VASELINE DAILY BRIGHTENING',
      price: 369,
      saves: 'Save 15%',
      seller:"Seller Information",
      sellerInfo:"Manufactured By",
      sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      packed:"Packed By",
      packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
    },
    {
      id: 4,
      image: 'https://images.apollo247.in/pub/media/catalog/product/l/a/lak0731_1.jpg?tr=w-250,q-80,f-webp,dpr-2.0000000298023224,c-at_max',
      brand: 'HUL',
      product: 'LAKME BLUSH BERRY GEL',
      price: 182,
      saves: 'Save 30%',
      seller:"Seller Information",
      sellerInfo:"Manufactured By",
      sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      packed:"Packed By",
      packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
    },
    {
      id: 5,
      image: 'https://images.apollo247.in/pub/media/catalog/product/I/O/IOD0040_1-AUG23_1.jpg?tr=w-250,q-80,f-webp,dpr-2.0000000298023224,c-at_max',
      brand: 'GLAXOSMITHKLINE',
      product: 'IODEX RAPID SPRAY 60ML',
      price: 199,
      saves: 'Save 5%',
      seller:"Seller Information",
      sellerInfo:"Manufactured By",
      sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      packed:"Packed By",
      packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
    },
    {
      id: 6,
      image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APH0081_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
      brand: 'APOLLO',
      product: 'HAND SANITIZER LIQUID',
      price: 309,
      saves: 'Save 15%',
      seller:"Seller Information",
      sellerInfo:"Manufactured By",
      sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      packed:"Packed By",
      packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
    },
    {
      id: 7,
      image: 'https://images.apollo247.in/pub/media/catalog/product/A/P/APS0087_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
      brand: 'APOLLO',
      product: 'SUNSCREAM WITH SPF 15',
      price: 299,
      saves: 'Save 5%',
      seller:"Seller Information",
      sellerInfo:"Manufactured By",
      sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      packed:"Packed By",
      packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
    },
    {
      id: 8,
      image: 'https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210109_164109__front__travel_neck_pillow_microbeads.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max',
      brand: 'APOLLO',
      product: 'TRAVEL NECK PILLOW',
      price: 500,
      saves: 'Save 5%',
      seller:"Seller Information",
      sellerInfo:"Manufactured By",
      sellerInfo2:" GINNI FILAMENTS LTD SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
      packed:"Packed By",
      packedInfo:"SECTOR 5, PLOT NO 98, SIDCUL U. K, INTEGRATED INDUSTRIAL ESTATE, SECTOR 5, HARIDWAR, UTTARAKHAND 249403",
    },
  ];

const ProductDetailss = () => {
  const { id } = useParams();
  const product = productDetailss.find(p => p.id === parseInt(id));
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
            Add to Cart
          </button>

          <div className="delivery-info">
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

export default ProductDetailss;
