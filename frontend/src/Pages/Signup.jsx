import React, { useState } from "react";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !userName ||
      !email ||
      !phoneNumber ||
      !address ||
      !birthDate ||
      !password
    ) {
      setError("Please fill out all fields");
      return;
    }

    const user = {
      firstName,
      lastName,
      userName,
      email,
      phoneNumber,
      address,
      birthDate,
      password,
    };
    const res = await fetch("http://localhost:3000/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      window.location.href = "/";
    }
  }, [token]);
  return (
    <div className="resetPassword">
      <div className="wrapper">
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
          <div className="nav-button">
            <a href="/login">
              <button className="btn white-btn" id="loginBtn">
                Sign In
              </button>
            </a>
            <a href="/signup">
              <button className="btn" id="registerBtn">
                Sign Up
              </button>
            </a>
          </div>
          <div className="nav-menu-btn">
            <i className="bx bx-menu" onclick="myMenuFunction()"></i>
          </div>
        </nav>
        <form className="form-box" onSubmit={handleSubmit}>
          <div className="register-container" id="login">
            <header>Sign Up</header>
            {error && <span className="error-message">{error}</span>}
            <div className="two-forms">
              <div className="input-box">
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  name="firstName"
                  type="text"
                  className="input-field"
                  placeholder="Firstname"
                />
                <i className="bx bx-user"></i>
              </div>
              <div className="input-box">
                <input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  name="lastName"
                  type="text"
                  className="input-field"
                  placeholder="Lastname"
                />
                <i className="bx bx-user"></i>
              </div>
            </div>
            <div className="input-box">
              <input
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                name="userName"
                type="text"
                className="input-field"
                placeholder="Username"
              />
              <i className="bx bx-user"></i>
            </div>
            <div className="input-box">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="input-field"
                placeholder="Email"
              />
              <i className="bx bx-envelope"></i>
            </div>
            <div className="input-box">
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                name="phoneNumber"
                type="tel"
                className="input-field"
                placeholder="PhoneNumber"
              />
              <i class="bx bxs-phone"></i>{" "}
            </div>
            <div className="input-box">
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                name="address"
                type="text"
                className="input-field"
                placeholder="Address"
              />
              <i class="bx bx-home-alt"></i>{" "}
            </div>
            <div className="input-box">
              <input
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                name="birthDate"
                type="date"
                className="input-field"
                placeholder="Birthdate"
              />
              <i class="bx bxs-calendar"></i>{" "}
            </div>
            <div className="input-box">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                className="input-field"
                placeholder="Password"
              />
              <i className="bx bx-lock-alt"></i>
            </div>
            <div className="input-box">
              <button type="submit" className="submit">
                Register
              </button>
            </div>
            <div className="two-col">
              <div className="two">
                <label>
                  <a href="#">Terms & conditions</a>
                </label>
              </div>
            </div>
            <div className="top">
              <span>
                Have an account?{" "}
                <a href="/login" onclick="login()">
                  Login
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
