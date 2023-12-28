const dbPool = require("../utils/databaseConnect");
const AppError = require("../utils/appError");

exports.getAllCars = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "SELECT car_id,plate_id,model,year,price_per_day,status,office_id FROM car",
    );

    res.status(200).json({
      status: "success",
      data: results,
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

exports.getCar = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "SELECT plate_id,model,year,price_per_day,status,office_id FROM car WHERE car_id = (?)",
      [req.params.carId],
    );

    res.status(200).json({
      status: "success",
      data: {
        results,
      },
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

exports.addCar = async (req, res, next) => {
  try {
    const results = await dbPool.execute(
      "INSERT INTO car (plate_id,model,year,price_per_day,status,office_id) VALUES (?,?,?,?,?,?)",
      [
        req.body.plateId,
        req.body.model,
        req.body.year,
        req.body.pricePerDay,
        req.body.status,
        req.body.officeId,
      ],
    );

    res.status(200).json({
      status: "success",
      data: {
        results,
      },
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

exports.updateCar = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "UPDATE car SET price_per_day=(?),status = (?),office_id=(?) WHERE car_id = (?)",
      [
        req.body.pricePerDay,
        req.body.status,
        req.body.officeId,
        req.params.carId,
      ],
    );

    res.status(200).json({
      status: "success",
      data: {
        results,
      },
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

exports.deleteCar = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "DELETE FROM car WHERE car_id = (?)",
      [req.params.carId],
    );

    res.status(200).json({
      status: "success",
      data: {
        results,
      },
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};
