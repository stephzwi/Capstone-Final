import React, { useState } from "react";
import Navbar from "./Navbar";

function Cart({ cartItems }) {
  console.log("Received cart items:", cartItems); // Add this line for debugging

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>Price: ${item.price}</span>
                <span>Quantity: {item.quantity}</span>
                <button>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
