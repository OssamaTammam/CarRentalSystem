const validator = require("validator");
const dbPool = require("../utils/databaseConnect");
const resGenerator = require("../utils/responseGenerator");

// Information sent (carId, pickupDate, returnDate, noDays, paymentStatus)
exports.reserveCar = async (req, res, next) => {
  try {
    // Make sure information is correct
    // Is car available
    const [carResults, carFields] = await dbPool.execute(
      "SELECT car_id, plate_id, status, office_id, price_per_day FROM car WHERE car_id = (?)",
      [req.body.carId],
    );

    // Invalid data
    if (
      !validator.isDate(req.body.pickupDate) ||
      !validator.isDate(req.body.returnDate) ||
      req.body.noDays <= 0
    ) {
      return resGenerator(
        res,
        400,
        "fail",
        "invalid date data or number of days",
      );
    }

    // Car doesn't exist
    if (!carResults[0]) {
      return resGenerator(res, 400, "fail", "car doesn't exist");
    }

    // Car isn't available for renting
    if (carResults[0].status != "Available") {
      return resGenerator(res, 400, "fail", "car isn't available for renting");
    }

    // Calculate total price
    const price =
      parseInt(carResults[0].price_per_day) * parseInt(req.body.noDays);

    // Make the reservation
    const [insertResResults, insertResFields] = await dbPool.execute(
      "INSERT INTO reservation(car_id,user_id,office_id,pickup_date,return_date,price,payment_status) VALUES (?,?,?,?,?,?,?)",
      [
        carResults[0].car_id,
        req.user.userId,
        carResults[0].office_id,
        req.body.pickupDate,
        req.body.returnDate,
        price,
        req.body.paymentStatus,
      ],
    );

    // Change the car to rented
    await dbPool.execute('UPDATE car SET status="Rented" WHERE car_id = (?)', [
      carResults[0].car_id,
    ]);

    // Get reservation info
    const [getResResults, getResFields] = await dbPool.execute(
      "SELECT reservation_id FROM reservation WHERE reservation_id = (?)",
      [insertResResults.insertId],
    );

    // Get office info
    const [getOfficeResults, getOfficeFields] = await dbPool.execute(
      "SELECT * FROM office WHERE office_id = (?)",
      [carResults[0].office_id],
    );

    res.status(200).json({
      status: "success",
      message: "car rented successfully",
      data: {
        reservation_id: getResResults[0].reservation_id,
        price,
        plate_id: carResults[0].plate_id,
        pickup_date: req.body.pickupDate,
        return_date: req.body.returnDate,
        office_location: getOfficeResults[0].office,
        office_phone_number: getOfficeResults[0].phone_number,
        office_email: getOfficeResults[0].email,
      },
    });
  } catch (error) {
    console.log(error);
    next(new AppError(error.message, 400));
  }
};
