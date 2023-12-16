const dbPool = require("../utils/databaseConnect");
const passwordHashing = require("../utils/passwordHashing");
const AppError = require("../utils/appError");
const responses = require("../utils/responses");
const token = require("../utils/token");
const user = require("../model/userModel");

const updateJwt = async (jwt, userId) => {
  await dbPool.execute("UPDATE user SET jwt = (?) WHERE user_id = (?) ", [
    jwt,
    userId,
  ]);
};

exports.signUp = async (req, res, next) => {
  try {
    if (
      !user.checkSignUpInfo(
        req.body.username,
        req.body.email,
        req.body,
        password,
      )
    ) {
      return responses.signupInvalidInfo();
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

    const userId = result[0].insertId;
    const jwt = await token.createJWT(userId, res);

    await updateJwt(jwt, userId);

    res.status(200).json({
      status: "success",
      message: "account created successfully",
      data: {
        userId,
        username: req.body.username,
      },
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};

exports.logIn = async (req, res, next) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // Check if email is on the right format
    if (!user.checkLoginInfo(email)) {
      return responses.loginInvalidInfo();
    }

    // Get all the user's info
    const [results, fields] = await dbPool.execute(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );
    const userId = results[0].user_id;
    const hashedPassword = results[0].password_hash;

    // Check if the password is correct
    if (!passwordHashing.verifyPassword(password, hashedPassword)) {
      return responses.loginInvalidInfo();
    }

    const jwt = await token.createJWT(userId, res);
    await updateJwt(jwt, userId);

    res.status(200).json({
      status: "success",
      message: `logged in as ${results[0].username}`,
    });
  } catch (error) {
    next(new AppError(error.message, 400));
  }
};
