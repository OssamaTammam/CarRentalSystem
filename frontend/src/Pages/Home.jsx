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
    const splitCar = e.target.value.split(" ");
    const model = splitCar.slice(0, splitCar.length - 1).join(" ");
    const year = splitCar[splitCar.length - 1];
    console.log(cars.filter((car) => car.model === model && car.year === year));
    setCars(cars.filter((car) => car.model === model && car.year === year));
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
            <ul>
              <h1>Filters</h1>
              <div className="checkbox">
                <input id="item1" type="checkbox" />
                <label htmlFor="item1">Item 1</label>
              </div>
              <div className="checkbox">
                <input id="item2" type="checkbox" />
                <label htmlFor="item2">Item 2</label>
              </div>
              <div className="checkbox">
                <input id="item3" type="checkbox" />
                <label htmlFor="item3">Item 3</label>
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
