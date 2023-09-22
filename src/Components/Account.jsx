// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Account({ token, setToken }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     async function getAllUsers() {
//       const response = await fetch("https://fakestoreapi.com/users");
//       const users = await response.json();

//       // Use the current component's state values
//       const usernameToFind = username;
//       const passwordToFind = password;

//       const userFound = users.find((user) => {
//         return (
//           user.username === usernameToFind && user.password === passwordToFind
//         );
//       });

//       if (userFound) {
//         console.log("User found with matching username and password");
//       } else {
//         console.log("No user found with matching username and password");
//       }
//     }

//     getAllUsers();
//   }, []);

//   async function handleSubmit(e) {
//     e.preventDefault();
//     console.log(username, password);
//     try {
//       const response = await fetch("https://fakestoreapi.com/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: username,
//           password: password,
//         }),
//       });
//       console.log("The response", response);
//       const result = await response.json();
//       setToken(result.token);
//       navigate("/");
//       console.log("The Result", result, result.token);
//     } catch (error) {
//       setError(error);
//     }
//   }

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Username:{" "}
//           <input
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </label>
//         <label>
//           Password:{" "}
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// }
// export default Account;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Account({ token, setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // Check if the user is already authenticated (e.g., using the token)
    if (token) {
      // Redirect the authenticated user to the home screen
      navigate("/");
    }
  }, [token, navigate]);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (response.status === 200) {
        const result = await response.json();
        setToken(result.token);
        navigate("/");
      } else {
        // Handle login failure, e.g., show an error message
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred while logging in");
    }
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
export default Account;
