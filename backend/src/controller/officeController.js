const dbPool = require("../utils/databaseConnect");
const AppError = require("../utils/appError");

exports.getAllOffices = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "SELECT office_id,location,phone_number,email FROM office",
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

exports.getOffice = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "SELECT location,phone_number,email FROM office WHERE office_id = (?)",
      [req.params.officeId],
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

exports.addOffice = async (req, res, next) => {
  try {
    const results = await dbPool.execute(
      "INSERT INTO office (location,phone_number,email) VALUES (?,?,?)",
      [req.body.location, req.body.phoneNumber, req.body.email],
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

exports.updateOffice = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "UPDATE office SET location = (?),phone_number = (?),email = (?) WHERE office_id = (?)",
      [
        req.body.location,
        req.body.phoneNumber,
        req.body.email,
        req.params.officeId,
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

exports.deleteOffice = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "DELETE FROM office WHERE office_id = (?)",
      [req.params.officeId],
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

exports.getOfficeCars = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "SELECT car_id,plate_id,model,year,price_per_day,status FROM car WHERE office_id = (?)",
      [req.params.officeId],
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
