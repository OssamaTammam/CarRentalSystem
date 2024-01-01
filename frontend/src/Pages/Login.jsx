import { useEffect, useState } from "react";
import isLoggedIn from "../../utils/isLoggedIn";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill out all fields");
      return;
    }

    const user = {
      email,
      password,
    };

    const res = await fetch("http://localhost:3000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });

    if (res.status === 200) {
      const jsonRes = await res.json();
      document.cookie = `jwt=${jsonRes.data.jwt}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/`;
      window.location.href = "/";
    } else {
      setError("Invalid Credentials");
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (await isLoggedIn()) {
        window.location.href = "/";
      }
    }
    fetchData();
  }, []);

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
            <i className="bx bx-menu" onClick="myMenuFunction()"></i>
          </div>
        </nav>

        <form className="form-box" onSubmit={handleSubmit}>
          <div className="login-container" id="login">
            <header>Login</header>
            {error && <span className="error-message">{error}</span>}
            <div className="input-box">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="text"
                className="input-field"
                placeholder="Email"
              />
              <i className="bx bx-user"></i>
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
                Login
              </button>
            </div>
            <div className="two-col">
              <div className="two">
                <label>
                  <a href="resetPassword">Forgot password?</a>
                </label>
              </div>
            </div>
            <div className="top">
              <span>
                Do not have an account?{" "}
                <a href="/signup" onClick="register()">
                  Sign Up
                </a>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
