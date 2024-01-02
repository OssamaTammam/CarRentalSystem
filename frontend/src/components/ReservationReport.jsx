const ReservationReport = ({ reservation }) => {
  return (
    <div className="card-home">
      <img width="250" height="300" src="images/car.jpg" alt="" />
      <div className="card_content">
        <h4>Reservation {reservation.reservation_id}</h4>
        <p>
          <span>Reservation ID: {reservation.reservation_id}</span>
          <br />
          <span>Car ID: {reservation.car_id}</span>
          <br />
          <span>User ID: {reservation.user_id}</span>
          <br />
          <span>Office ID: {reservation.office_id}</span>
          <br />
          <span>Reservation Date: {reservation.reservation_date}</span>
          <br />
          <span>Pickup Date: {reservation.pickup_date}</span>
          <br />
          <span>Return Date: {reservation.return_date}</span>
          <br />
          <span>Price: {reservation.price}</span>
          <br />
          <span>Payment Status: {reservation.payment_status}</span>
          <br />
          <span>Car Model: {reservation.model}</span>
          <br />
          <span>Car Year: {reservation.year}</span>
          <br />
          <span>Office Location: {reservation.location}</span>
          <br />
          <span>Office Email: {reservation.email}</span>
          <br />
          <span>Office Phone Number: {reservation.phone_number}</span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default ReservationReport;
