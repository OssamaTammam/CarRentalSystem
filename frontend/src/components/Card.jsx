const Card = ({ car }) => {
  return (
    <div className="card-home">
      <img width="250" height="300" src="images/car.jpg" alt="" />
      <div className="card_content">
        <h1>{car.model + " " + car.year}</h1>
        <p>{`Price Per Day: ${car.price_per_day}`}</p>
        <a href={"/rentedcar?id=" + car.car_id}>
          <button>Book Now</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
