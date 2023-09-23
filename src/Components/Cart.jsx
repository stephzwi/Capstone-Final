import React, { useEffect, useState } from "react";

function Cart() {
  const [carts, setCarts] = useState([]);
  const [cartItems, setCartItems] = useState([]); // Local cart state

  useEffect(() => {
    fetch("https://fakestoreapi.com/carts")
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const addToCart = (product) => {
    // Add the product to the local cart state
    setCartItems((prevCartItems) => [...prevCartItems, product]);

    // Update the quantity in the user's cart
    updateCartItem(product.productId, user.userId, product.quantity);
  };

  return (
    <div>
      <h1>Cart</h1>
      {carts.map((cart) => (
        <div key={cart.id}>
          <h2>User ID: {cart.userId}</h2>
          <p>Date: {cart.date}</p>
          <ul>
            {cart.products.map((product) => (
              <li key={product.productId}>
                Product ID: {product.productId}, Quantity: {product.quantity}
                <button onClick={() => addToCart(product)}>Buy</button>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Display the local cart */}
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            Product ID: {item.productId}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
