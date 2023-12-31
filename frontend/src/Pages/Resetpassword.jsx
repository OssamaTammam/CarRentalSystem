const Resetpassword = () => {
  return (
    <div className="resetPassword">
      <div className="wrapper ">
        <nav className="nav">
          <div className="nav-logo">
            <p>Car Rental System</p>
          </div>
          <div className="nav-menu" id="navMenu">
            <ul>
              <li>
                <a href="/" className="link active">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="form-box">
          <div className="login-container" id="login">
            <header>Forgot Password</header>
            <div className="input-box1">
              <input type="text" className="input-field" placeholder="Email" />
              <button>Send Code</button>
            </div>
            <div className="input-box">
              <input
                type="Code"
                className="input-field"
                placeholder="Confirmation Code"
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <input type="submit" className="submit" value="Reset" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resetpassword;
