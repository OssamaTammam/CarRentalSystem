import { useState } from "react";

const host = import.meta.env.VITE_HOST;
const port = import.meta.env.VITE_PORT;

const Admin = () => {
  const [car, setCar] = useState({
    plateId: "",
    model: "",
    year: "",
    pricePerDay: "",
    color: "",
    horsePower: "",
    officeId: "",
    status: "Available",
  });
  const [carId, setCarId] = useState("");
  const [reservationId, setReservationId] = useState("");

  const handleCarInputChange = (e) => {
    const { name, value } = e.target;

    setCar((car) => ({
      ...car,
      [name]: value,
    }));
  };

  const addCar = async () => {
    const res = await fetch(`${host}:${port}/car`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(car),
    });

    alert(res.ok ? "Car added successfully" : "Error adding car");
  };

  const deleteCar = async () => {
    const res = await fetch(`${host}:${port}/car/${carId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    alert(res.ok ? "Car deleted successfully" : "Error deleting car");
  };

  const deleteReservation = async () => {
    const res = await fetch(`${host}:${port}/reservation/${reservationId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    alert(
      res.ok ? "Reservation deleted successfully" : "Error deleting reservation"
    );
  };

  return (
    <div className="accountgui">
      <div className=" container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Admin Panel</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="test col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <a
                  className="list-group-item list-group-item-action active"
                  data-toggle="list"
                  href="#admin-cars"
                >
                  Cars
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href="#admin-reservations"
                >
                  Reservations
                </a>
              </div>
              <a className="back" href="/">
                <div>Home</div>
              </a>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="admin-cars">
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <div>
                      <h4>Add Car</h4>
                      <div className="form-group">
                        <label className="form-label">Plate ID</label>
                        <input
                          name="plateId"
                          value={car.plateId}
                          onChange={handleCarInputChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Model</label>
                        <input
                          name="model"
                          value={car.model}
                          onChange={handleCarInputChange}
                          type="text"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Year</label>
                        <input
                          name="year"
                          value={car.year}
                          onChange={handleCarInputChange}
                          type="text"
                          className="form-control"
                        />
                        <div className="form-group">
                          <label className="form-label">Price Per Day</label>
                          <input
                            name="pricePerDay"
                            value={car.pricePerDay}
                            onChange={handleCarInputChange}
                            type="text"
                            className="form-control mb-1"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Color</label>
                          <input
                            name="color"
                            value={car.color}
                            onChange={handleCarInputChange}
                            type="text"
                            className="form-control mb-1"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Horse Power</label>
                          <input
                            name="horsePower"
                            value={car.horsePower}
                            onChange={handleCarInputChange}
                            type="text"
                            className="form-control mb-1"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Office ID</label>
                          <input
                            name="officeId"
                            value={car.officeId}
                            onChange={handleCarInputChange}
                            type="text"
                            className="form-control mb-1"
                          />
                        </div>
                      </div>
                      <button
                        onClick={addCar}
                        type="button"
                        className="btn btn-primary"
                      >
                        Add Car
                      </button>
                    </div>
                    <div>
                      <h3>Delete Car</h3>
                      <div className="form-group">
                        <label className="form-label">Car ID</label>
                        <input
                          value={carId}
                          onChange={(e) => setCarId(e.target.value)}
                          type="text"
                          className="form-control mb-1"
                        />
                      </div>
                      <button
                        onClick={deleteCar}
                        type="button"
                        className="btn btn-primary text-right"
                      >
                        Delete Car
                      </button>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="admin-reservations">
                  <div className="card-body pb-2">
                    <h4>Delete Reservation</h4>
                    <div className="form-group">
                      <label className="form-label">Reservation ID</label>
                      <input
                        value={reservationId}
                        onChange={(e) => setReservationId(e.target.value)}
                        type="text"
                        className="form-control mb-1"
                      />
                    </div>
                    <button
                      onClick={deleteReservation}
                      type="button"
                      className="btn btn-primary text-right"
                    >
                      Delete Car
                    </button>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body pb-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
