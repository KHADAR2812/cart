import React from "react";

const Cart = ({ cartItems, removeFromCart }) => {
  
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart section">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-image" />
                <span>{item.name} - Rs.{item.price.toFixed(2)}</span>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          
          <div className="cart-total">Total: Rs.{totalPrice.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
