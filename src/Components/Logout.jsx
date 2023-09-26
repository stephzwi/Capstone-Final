import { useNavigate } from "react-router-dom";

function Logout({ setToken }) {
  const handleLogout = () => {
    // Clear the token (log out) and stay on the current page
    setToken(null);
    localStorage.clear();
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;
