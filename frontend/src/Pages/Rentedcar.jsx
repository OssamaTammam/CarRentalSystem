import React from "react";
import NavBar from "../components/NavBar";

const Rentedcar = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <NavBar />
      <div className="rent-a-car">
        <img src="images/car.jpg" alt="" />
        <div className="left_content">
          <div>
            <h1>Car Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur
              <br />
              adipisicing elit. Est praesentium eligendi similique
              <br /> officiis cupiditate deleniti minima eum laborum quod
              deserunt,
              <br /> temporibus quia molestias animi eos dolorum iusto totam
              culpa sit?
            </p>
            <p className="price">99.99$</p>
            <div className="datebox">
              <div>
                <div>From</div>
                <input type="date" />
              </div>
              <div>
                <div>To</div>
                <input type="date" />
              </div>
            </div>
          </div>
          <a href="/">
            <button>Rent</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Rentedcar;
