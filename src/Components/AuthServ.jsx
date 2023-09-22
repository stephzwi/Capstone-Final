// const AuthService = {
//   token: null,

//   login: (user) => {
//     // Check if a token is already generated for this user
//     const existingUser = AuthService.getLoggedInUser();
//     if (existingUser) {
//       // Return the existing token
//       return AuthService.token;
//     }

//     // Generate a fake token (you can also use any other logic to generate a token)
//     AuthService.token = Math.random().toString(36).substring(2);

//     // Store the generated token in localStorage
//     localStorage.setItem("token", AuthService.token);

//     // Store the user information in localStorage
//     localStorage.setItem("loggedInUser", JSON.stringify(user));

//     // Return the stored token
//     return AuthService.token;
//   },

//   // Simulated logout function
//   logout: () => {
//     // Remove the token from localStorage
//     localStorage.removeItem("token");

//     // Remove the user information from localStorage
//     localStorage.removeItem("loggedInUser");

//     // Reset the token in memory
//     AuthService.token = null;
//   },

//   // Get the token from localStorage
//   getToken: () => {
//     // Check if the token is already set in memory
//     if (AuthService.token) {
//       return AuthService.token;
//     }

//     // If not in memory, get it from localStorage
//     return localStorage.getItem("token");
//   },

//   // Get the logged-in user from localStorage
//   getLoggedInUser: () => {
//     const userJson = localStorage.getItem("loggedInUser");
//     console.log("User JSON:", userJson); // Add this line to check the value
//     if (userJson) {
//       try {
//         return JSON.parse(userJson);
//       } catch (error) {
//         console.error("Error parsing user JSON:", error);
//       }
//     }
//     return null;
//   },
// };

// export default AuthService;
