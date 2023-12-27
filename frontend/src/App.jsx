import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import "./css/master.css";
import Rentedcar from "./Pages/Rentedcar";
import Resetpassword from "./Pages/Resetpassword";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/rentedcar" element={<Rentedcar />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
