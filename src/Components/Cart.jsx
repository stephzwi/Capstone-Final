import React, { useEffect, useState } from "react";

function Cart(props) {
  console.log(props);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/carts")
  //     .then((res) => res.json())
  //     .then((data) => setCarts(data));
  // }, []);

  const addToCart = (product) => {
    // Update the local cart state
    setCartItems((prevCartItems) => [...prevCartItems, product]);

    //   Send a POST request to update the server-side cart
    fetch(`https://fakestoreapi.com/carts/${user.userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: product.productId,
        quantity: product.quantity + 1, // Update the quantity as needed
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to update cart on the server");
        }
        // Handle success if needed
      })
      .catch((error) => {
        console.error(error);
        // Handle the error if needed
      });

    // Update the quantity in the user's cart
    updateCartItem(
      product.image,
      product.productId,
      props.user.userId,
      product.quantity
    );
  };

  return (
    <div>
      <h1>Cart</h1>
      {/* {carts.map((cart) => (
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
      ))} */}

      {/* Display the local cart */}
      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map((item, index) => (
          <li key={index}>
            Product ID: {item.productId}, Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
