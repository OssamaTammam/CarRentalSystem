const dbPool = require("../utils/databaseConnect");
const passwordHashing = require("../utils/passwordHashing");

exports.signUp = async (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      status: "fail",
    });
  }

  const result = await dbPool.execute(
    "INSERT INTO user (username,first_name,last_name,birth_date,address,email,password_hash,phone_number,role) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      req.body.username,
      req.body.firstName,
      req.body.lastName,
      req.body.birthDate,
      req.body.address,
      req.body.email,
      await passwordHashing.hashPassword(req.body.password),
      req.body.phoneNumber,
      req.body.role,
    ],
  );

  res.status(200).json({
    status: "success",
  });
};
