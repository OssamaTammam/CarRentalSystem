import Card from "../components/Card";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

const fetchData = async () => {
  try {
    // Make a request to your API or server
    const response = await fetch("http://localhost:3000/car", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // This includes cookies in the request
    });

    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Parse the JSON data from the response
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

const Home = async () => {
  const [cars, setCars] = useState();

  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    async function fetchData() {
      const result = await fetchData();
      setCars(result);
    }
    fetchData();
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
        {[
          {
            id: 1,
            name: "Car Name1",
            description: "Car Description",
            image: "images/car.jpg",
          },
          {
            id: 2,
            name: "Car Name2",
            description: "Car Description",
            image: "images/car.jpg",
          },
          {
            id: 3,
            name: "Car Name3",
            description: "Car Description",
            image: "images/car.jpg",
          },
        ].map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
