import { useSearchParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useState } from "react";

const Rentedcar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [car, setCar] = useState({});
  const id = searchParams.get("id");

  const getCar = async () => {
    const res = await fetch(`http://localhost:3000/car/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCar(data?.data?.results);
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
            <h1>{car?.model}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur
              <br />
              adipisicing elit. Est praesentium eligendi similique
              <br /> officiis cupiditate deleniti minima eum laborum quod
              deserunt,
              <br /> temporibus quia molestias animi eos dolorum iusto totam
              culpa sit?
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
