import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import { useEffect, useState } from "react";
import Account from "./Components/Account";
import Logout from "./Components/Logout";
import Home from "./Components/Home";
import "./App.css";
import AllProducts from "./Components/AllProducts";
import SingleProduct from "./Components/SingleProduct";

function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );

  useEffect(() => {
    // Save the cart items to local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Use the useNavigate hook to obtain the navigate function
  const navigate = useNavigate();

  function addToCart(product) {
    // Prevent the default button click behavior (navigation)

    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, update the quantity
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }

    // Use the navigate function to go to the cart page
    navigate("/cart");
  }

  const handleLogout = () => {
    // Clear the token and navigate to the login page
    setToken(null);
    navigate("/");
  };

  return (
    <div>
      <Navbar token={token} setToken={setToken} handleLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<AllProducts addToCart={addToCart} user={user} />}
        />

        <Route path="/products/:id" element={<SingleProduct />} />
        <Route
          path="/login"
          element={
            <Account
              user={user}
              setUser={setUser}
              token={token}
              setToken={setToken}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              user={user}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/logout" element={<Logout setToken={setToken} />} />
      </Routes>
    </div>
  );
}

export default App;
