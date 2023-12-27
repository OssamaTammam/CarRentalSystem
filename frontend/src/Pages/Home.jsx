import Card from "../components/Card";
import NavBar from "../components/NavBar";

const Home = () => {
  const handleClick = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };
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
