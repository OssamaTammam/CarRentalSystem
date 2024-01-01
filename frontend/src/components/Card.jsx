const Card = ({ car }) => {
  return (
    <div className="card-home">
      <img width="250" height="300" src="images/car.jpg" alt="" />
      <div className="card_content">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
        <a href={"/rentedcar?id=" + item.id}>
          <button>Book Now</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
