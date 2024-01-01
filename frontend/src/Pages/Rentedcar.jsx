import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useState } from "react";

const Rentedcar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [car, setCar] = useState([]);
  const id = searchParams.get("id");

  const getCar = async () => {
    const res = await fetch(`http://localhost:3000/car/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCar(data?.data[0]);
  };

  useEffect(() => {
    getCar();
  }, []);

  return (
    <>
      <NavBar />
      <div className="rent-a-car">
        <img src="images/car.jpg" alt="" />
        <div className="left_content">
          <div>
            <h1>{car?.model + " " + car?.year}</h1>
            <p>
              <span>Plate ID:</span> {car?.plate_id} <br />
              <span>Model:</span> {car?.model} <br />
              <span>Year:</span> {car?.year} <br />
              <span>Color:</span> {car?.color} <br />
              <span>Horse Power:</span> {car?.horse_power} <br />
              <span>Office Location:</span> {car?.location} <br />
              <span>Office Email:</span> {car?.email} <br />
              <span>Office Phone Number:</span> {car?.phone_number} <br />
              <span>Price Per Day:</span> {car?.price} <br />
            </p>
            <p className="price">{car?.price_per_day}</p>
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
