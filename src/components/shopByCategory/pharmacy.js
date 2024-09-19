import React from 'react';
import './pharmacy.css';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/action';

const pharmacyProducts = [
    {
        id: 1,
        image: "https://images.apollo247.in/pub/media/catalog/product/a/c/aci0008_2.jpg?tr=w-350,q-60,f-webp,dpr-2.0000000298023224,c-at_max",
        brand: "CADILA PHARMACEUTICALS LTD",
        product: "ACILOC S 200ML SYRUP",
        price: 146,
    },
    {
        id: 2,
        image: "https://images.apollo247.in/pub/media/catalog/product/A/C/ACI0009_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
        brand: "AUROBINDO PHARMA LTD",
        product: "ACINIL O 120 ML SUSP",
        price: 123,
    },
    {
        id: 3,
        image: "https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0076_1_2.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
        brand: "AUROBINDO PHARMA LTD",
        product: "ACINIL O 200 ML SUSP",
        price: 201,
    },
    {
        id: 4,
        image: "https://images.apollo247.in/pub/media/catalog/product/C/A/CAL0214_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
        brand: "MEYER ORGANICS PVT LTD",
        product: "CALCIMAX 200ML SYRUP",
        price: 171,
    },
    {
        id: 5,
        image: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0006_2.jpg?tr=w-350,q-80,f-webp,dpr-1.25,c-at_max",
        brand: "RX",
        product: "BENADRYL COUGH 50ML SYRUP",
        price: 90,
    },
    {
        id: 6,
        image: "https://images.apollo247.in/pub/media/catalog/product/C/O/COF0151_1-JULY23_1.jpg?tr=w-350,q-80,f-webp,dpr-2.0000000298023224,c-at_max",
        brand: "CIPLA",
        product: "COFCILS NATURAL COUGH 100ML",
        price: 127,
    },
    {
        id: 7,
        image: "https://images.apollo247.in/pub/media/catalog/product/k/o/kof0003_1-jan24_4_.jpg?tr=w-350,q-80,f-webp,dpr-2.0000000298023224,c-at_max",
        brand: "HIMALAYA",
        product: "KOFLET COUGH SYRUP 100ML",
        price: 110,
    },
    {
        id: 8,
        image: "https://images.apollo247.in/pub/media/catalog/product/A/L/ALK0009_1_1.jpg?tr=w-350,q-80,f-webp,dpr-2.0000000298023224,c-at_max",
        brand: "RX-ALKOF",
        product: "ORANGE COUGH SYRUP 100ML",
        price: 83,
    },
];

const Pharmacy = () => {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
    };

    
    return (
        <div>
        <h1 className="pharmacy-title">Pharmacy Products</h1>
        <div className="pharmacy-container container">
            {pharmacyProducts.map(product => (
                <div key={product.id} className="pharmacy-product">
                    <img src={product.image} alt={product.product} className="pharmacy-image" />
                    <div className="pharmacy-details">
                        <h3 className="pharmacy-product-name">{product.product}</h3>
                        <p className="pharmacy-brand">{product.brand}</p>
                        <p className="pharmacy-price">Price: ₹{product.price}</p>
                        <button className='btn btn-danger' onClick={() => handleAddToCart(product)}>Add Cart</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
    );
};

export default Pharmacy;
