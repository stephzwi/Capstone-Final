// // import React from "react";
// // import { Link } from "react-router-dom";
// // import Logout from "./Logout";

// // function Navbar ({ token, setToken }) => {
// //     console.log("token", token)

// //   return (
// //     <div className="navbar">
// //       <div className="logo">
// //         <img src="your_logo_url_here" alt="Logo" />
// //       </div>
// //       <ul className="nav-bar-container">
// //         <li className="nav-bar-item">
// //           <Link to="/" className="custom-link">
// //             Home
// //           </Link>
// //         </li>
// //         <li className="nav-bar-item">
// //           <Link to="/cart" className="custom-link">
// //             My Cart
// //           </Link>
// //         </li>
// //         <li className="nav-bar-item">
// //           <Link to="/login" className="custom-link">
// //             Account
// //           </Link>
// //         </li>

// //         <li className="nav-bar-item">
// //           <Link to="/products" className="custom-link">
// //             All Products
// //           </Link>
// //           <div className="nav-bar-item">
// //             {token && <Logout setToken={setToken} />}
// //           </div>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Navbar;

// import React from "react";
// import { Link } from "react-router-dom";
// import Logout from "./Logout";

// function Navbar({ token, setToken, handleLogout }) {
//   return (
//     <div className="navbar">
//       <div className="logo">
//         <img src="your_logo_url_here" alt="Logo" />
//       </div>
//       <ul className="nav-bar-container">
//         <li className="nav-bar-item">
//           <Link to="/" className="custom-link">
//             Home
//           </Link>
//         </li>
//         <li className="nav-bar-item">
//           <Link to="/cart" className="custom-link">
//             My Cart
//           </Link>
//         </li>
//         <li className="nav-bar-item">
//           <Link to="/login" className="custom-link">
//             Account
//           </Link>
//         </li>
//         <li className="nav-bar-item">
//           <Link to="/products" className="custom-link">
//             All Products
//           </Link>
//         </li>
//         <li className="nav-bar-item">
//           {token ? (
//             <button onClick={handleLogout} className="custom-link">
//               Logout
//             </button>
//           ) : (
//             <Link to="/login" className="custom-link">
//               Logout
//             </Link>
//           )}
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout"; // Assuming you have a Logout component

function Navbar({ token, setToken, handleLogout }) {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="your_logo_url_here" alt="Logo" />
      </div>
      <ul className="nav-bar-container">
        <li className="nav-bar-item">
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/cart" className="custom-link">
            My Cart
          </Link>
        </li>
        <li className="nav-bar-item">
          <Link to="/products" className="custom-link">
            All Products
          </Link>
        </li>
        {token ? (
          <li className="nav-bar-item">
            <Logout setToken={setToken} />
          </li>
        ) : (
          <li className="nav-bar-item">
            <Link to="/login" className="custom-link">
              Account
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
