function Cart(props) {
  console.log("Props from cart", props);
  return (
    <div>
      <h1>Cart</h1>

      <h2>Your Cart</h2>
      <ul>
        {props.cartItems.map((item, index) => (
          <li key={index}>
            <img src={item.image}></img> ,Product ID: {item.id}, Quantity:{" "}
            {item.quantity}, Item Name:
            {item.title}, Item Price: {item.price * item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
