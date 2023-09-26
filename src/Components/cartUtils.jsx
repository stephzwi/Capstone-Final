// cartUtils.js

// Function to update a cart item on the server
export async function updateCartItem(productId, userId, quantity) {
  try {
    const response = await fetch(`https://your-api.com/update-cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId,
        userId,
        quantity,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update cart on the server");
    }

    // Handle success if needed
    return response.json(); // You can return data if the API responds with data
  } catch (error) {
    console.error(error);
    // Handle the error if needed
    throw error;
  }
}
