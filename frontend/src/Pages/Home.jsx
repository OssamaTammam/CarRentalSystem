import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;

const Home = () => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const res = await fetch(`${host}:${port}/car`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    const cars = data.data.filter((car) => car.status === "Available");
    setCars(cars);
  };

  const clearCars = () => {
    setCars([]);
  };

  const filterByName = async (e) => {
    if (e.target.value === "") {
      clearCars();
      getCars();
      return;
    }

    const splitCar = e.target.value.split(" ");
    const model = splitCar.slice(0, splitCar.length - 1).join(" ");
    const year = splitCar[splitCar.length - 1];
    const filteredCars = cars.filter(
      (car) =>
        car.model.trim().toLowerCase() === model.trim().toLowerCase() &&
        car.year === parseInt(year, 10)
    );

    if (filteredCars.length > 0) {
      setCars(filteredCars);
    } else {
      getCars();
    }
  };

  const filterByColor = async (e) => {
    if (e.target.value === "") {
      clearCars();
      getCars();
      return;
    }

    const color = e.target.value;
    const filteredCars = cars.filter(
      (car) => car.color.trim().toLowerCase() === color.trim().toLowerCase()
    );

    if (filteredCars.length > 0) {
      setCars(filteredCars);
    } else {
      getCars();
    }
  };

  const filterByHorsePower = async (e) => {
    if (e.target.value === "") {
      clearCars();
      getCars();
      return;
    }

    const horsePower = parseInt(e.target.value, 10);
    const filteredCars = cars.filter((car) => car.horse_power === horsePower);

    if (filteredCars.length > 0) {
      setCars(filteredCars);
    } else {
      getCars();
    }
  };

  const filterByPricePerDay = async (e) => {
    if (e.target.value === "") {
      clearCars();
      getCars();
      return;
    }

    const pricePerDay = parseInt(e.target.value, 10);
    const filteredCars = cars.filter(
      (car) => car.price_per_day === pricePerDay
    );

    if (filteredCars.length > 0) {
      setCars(filteredCars);
    } else {
      getCars();
    }
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <div>
      {" "}
      <NavBar />
      <nav className="sidebar">
        <div className="menu_content">
          <ul className="menu_items">
            <div className="menu_title menu_dahsboard"></div>
            <div className="search_bar">
              <input
                onChange={filterByName}
                type="text"
                placeholder="Car Name"
              />
            </div>
            {/* <ul>
              <h1>Filters</h1>
              <div className="checkbox">
                <input id="item1" type="checkbox" />
                <label htmlFor="item1">Item 1</label>
              </div>
              <div className="search_bar">
                <input
                  onChange={filterByHorsePower}
                  type="text"
                  placeholder="Horse Power"
                />
              </div>
              <div className="search_bar">
                <input
                  onChange={filterByPricePerDay}
                  type="text"
                  placeholder="Price Per Day"
                />
              </div>
            </ul>
          </ul>
        </div>
      </nav>
      <div className="main_content">
        {cars?.map((item) => {
          return <Card key={item.car_id} car={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
