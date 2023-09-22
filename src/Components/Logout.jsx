// import { useNavigate } from "react-router-dom";

// function Logout({ setToken }) {
//   const navigate = useNavigate();
//   const Logout = () => {
//     setToken(null);
//     navigate("/logout");
//   };

//   return <button onClick={Logout}>Logout</button>;
// }
// export default Logout;
import { useNavigate } from "react-router-dom";

function Logout({ setToken }) {
  const handleLogout = () => {
    // Clear the token (log out) and stay on the current page
    setToken(null);
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
