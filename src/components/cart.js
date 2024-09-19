import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './cart.css';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const totalPrice = useSelector((state) => state.totalPrice);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handlePurchase = () => {
    if (!name || !email) {
      alert('Please fill in both name and email');
      return;
    }
    alert(`Thank you for your purchase, ${name}!`);
    handleClearCart();
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <p className="cart-summary">Total Items : {totalQuantity}</p>
      <p className="cart-summary">Total Price : ₹ {totalPrice}</p>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">No items in the cart</p>
      ) : (
        <>
          <div className="cart-grid">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <img className="cart-image" src={item.image} alt={item.product} />
                <div className="cart-details">
                  <h4 className="cart-product">{item.product}</h4>
                  <p className="cart-quantity">Quantity : {item.quantity}</p>
                  <p className="cart-price">Price : ₹ {item.price}</p>
                  <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-actions">
            <div className="cart-inputs">
              <input 
                type="text" 
                placeholder="Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                className="cart-input"
              />
              <input 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="cart-input"
              />
            </div>
            <button className="purchase-btn" onClick={handlePurchase}>Purchase</button>
            <button className="clear-btn" onClick={handleClearCart}>Clear Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
