import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import isLoggedIn from "../../utils/isLoggedIn";

const Rentedcar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [car, setCar] = useState([]);
  const [pickupDate, setPickupDate] = useState();
  const [returnDate, setReturnDate] = useState("");
  const id = searchParams.get("id");

  const fetchData = async () => {
    try {
      const result = await isLoggedIn();
      if (!result) {
        window.location.href = "/login";
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Run once on component mount

  const rentCar = async () => {
    const timeDifference = Date.parse(returnDate) - Date.parse(pickupDate);
    const noDays = timeDifference / (1000 * 3600 * 24);
    console.log(noDays);
    const rentBody = {
      carId: id,
      pickupDate: pickupDate,
      returnDate: returnDate,
      noDays: noDays,
      paymentStatus: "Paid",
    };

    const res = await fetch("http://localhost:3000/reservation/reserve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(rentBody),
    });

    if (res.ok) {
      alert("Rented!!!");
    } else {
      alert("ERROR!!!");
    }

    window.location.href = "/";
  };

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
              <span>Price Per Day:</span> {car?.price_per_day} <br />
            </p>
            <div className="datebox">
              <div>
                <div>From</div>
                <input
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
              <div>
                <div>To</div>
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <a>
            <button onClick={rentCar}>Rent</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Rentedcar;
