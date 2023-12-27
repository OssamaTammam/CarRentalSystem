import React from "react";

const NavBar = () => {
  const token = window.localStorage.getItem("token");
  const handleClick = () => {
    window.localStorage.removeItem("token");
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
        {token ? (
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
