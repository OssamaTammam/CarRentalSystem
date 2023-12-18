const dbPool = require("../utils/databaseConnect");
const AppError = require("../utils/appError");

exports.getAllUsers = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "SELECT user_id,username,first_name,last_name,birth_date,address,email,phone_number,role FROM user",
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

exports.getUser = async (req, res, next) => {
  try {
    const username = req.params.username;
    const [results, fields] = await dbPool.execute(
      "SELECT user_id,username,first_name,last_name,birth_date,address,email,phone_number,role FROM user WHERE username = (?)",
      [username],
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

exports.updateUser = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "UPDATE user SET first_name = (?),last_name = (?),birth_date = (?),address = (?),phone_number = (?) WHERE username = (?)",
      [
        req.body.firstName,
        req.body.lastName,
        req.body.birthDate,
        req.body.address,
        req.body.phoneNumber,
        req.params.username,
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

exports.deleteUser = async (req, res, next) => {
  try {
    const [results, fields] = await dbPool.execute(
      "DELETE FROM user WHERE username = (?)",
      [req.params.username],
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
