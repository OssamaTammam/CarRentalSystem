const dbPool = require("../utils/databaseConnect");
const AppError = require("../utils/appError");
const responses = require("../utils/responses");
const util = require("util");

exports.getAllCars = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "SELECT plate_id,model,year,price_per_day,status,office_id FROM car",
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

exports.getCar = async (req, res, next) => {
  try {
    const model = req.params.model;
    const [results, fields] = await dbPool.execute(
      "SELECT model,year,price_per_day,status,office_id FROM car WHERE model = (?)",
      [model],
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
      "UPDATE car SET price_per_day=(?),status = (?),office_id=(?) WHERE model = (?)",
      [
        req.body.pricePerDay,
        req.body.status,
        req.body.officeId,
        req.params.model,
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
