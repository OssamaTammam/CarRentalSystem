import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

const Home = () => {
  const [cars, setCars] = useState([]);

  const getCars = async () => {
    const res = await fetch("http://localhost:3000/car", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setCars(data?.data?.results.filter((item) => item.isRented === false));
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
              <input type="text" placeholder="Car Name" />
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
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
