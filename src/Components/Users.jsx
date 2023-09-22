import React, { useState, useEffect } from "react";

const Url = "https://fakestoreapi.com/users";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(Url);
        const data = await response.json();
        console.log(data);
        setUsers(data); // Update the state with the fetched user data
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUsers(); // Call the fetchUsers function when the component mounts
  }, []);

  // This component does not render the users
  return null;
}

export default Users;
