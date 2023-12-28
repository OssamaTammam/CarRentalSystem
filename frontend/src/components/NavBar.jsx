import { useEffect, useState } from "react";
import isLoggedIn from "../../utils/isLoggedIn";

const NavBar = () => {
  const [isLoggedInState, setIsLoggedInState] = useState(false);

  const fetchData = async () => {
    try {
      const result = await isLoggedIn();
      setIsLoggedInState(result);
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run once on component mount

  const handleClick = () => {
    document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    window.location.href = "/";
  };
  return (
    <nav className="navbar">
      <div className="logo_item">
        <i className="bx bx-menu" id="sidebarOpen"></i>
        <img src="images/logo.png" alt="" />
        Car Rental Service
      </div>
      <div className="navbar_content">
        <i className="bi bi-grid"></i>
        {isLoggedInState ? (
          <>
            <button onClick={handleClick}>Logout</button>
            <a href="/account">
              <img src="images/profile.jpg" alt="" className="profile" />
            </a>
          </>
        ) : (
          <>
            <a href="/login">
              <button> Login</button>
            </a>
            <a href="/signup">
              <button> Sign Up</button>
            </a>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
