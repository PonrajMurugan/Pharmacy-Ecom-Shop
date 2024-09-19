import React from 'react';
import './medplusFactory.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';

const medplusFactoryProducts = [
  {
    id: 1,
    image: "https://images.apollo247.in/pub/media/catalog/product/a/p/aph0002_1-sep2023.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
    brand: "APOLLO",
    product: "AQUA BLUE HANDWASH",
    price: 100,
  },
  {
    id: 2,
    image: "https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210108_174942__front__omega-3_fish_oil_4__1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
    brand: "APOLLO",
    product: "OMEGA 3 FISH OIL CAP",
    price: 180,
  },
  {
    id: 3,
    image: "https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210116_123803__front__first_aid_kit_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
    brand: "APOLLO",
    product: "FIRST AID KIT",
    price: 450,
  },
  {
    id: 4,
    image: "https://images.apollo247.in/pub/media/catalog/product/a/p/apr0111_1-qwerf.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
    brand: "APOLLO",
    product: "PREMIUM WET WIPES",
    price: 120,
  },
  {
    id: 5,
    image: "https://images.apollo247.in/pub/media/catalog/product/i/m/img_20210108_180518__front__diabetic_protein_powder_1_.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
    brand: "APOLLO",
    product: "DIABETIC VANNILA PROTEIN POWDER",
    price: 296,
  },

  {
    id: 6,
    image: "https://images.apollo247.in/pub/media/catalog/product/A/P/APO0086_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
    brand: "APOLLO",
    product: "ORS ORANGE FLAVOUR DRINK",
    price: 100,
  },
  {
    id: 7,
    image: "https://images.apollo247.in/pub/media/catalog/product/a/p/apb0065-pdp_images.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
    brand: "APOLLO",
    product: "SMART BLOOD GLUCOSE MONITORING",
    price: 799,
  },
  {
    id: 8,
    image: "https://images.apollo247.in/pub/media/catalog/product/A/P/APV0019_2-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
    brand: "APOLLO",
    product: "VITAMIN D3 60000 IU , 4 CAPSULES  ",
    price: 90,
  },
];

const MedplusFactory = () => {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="medplus-container">
    <div className="medplus-header">
      <h1 className="header-title">Top Offers</h1>
    </div>
    <div className="medplus-grid container">
      {medplusFactoryProducts.map((product) => (
        <div key={product.id} className="medplus-card">
          <img src={product.image} alt={product.product} className="medplus-image" />
          <h3 className="medplus-product-title">{product.product}</h3>
          <p className="medplus-product-brand">{product.brand}</p>
          <p className="medplus-product-price">₹{product.price}</p>
          <button className='btn btn-danger' onClick={() => handleAddToCart(product)}>Add Cart</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default MedplusFactory;
