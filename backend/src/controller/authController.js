const jwt = require("jsonwebtoken");

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
        req.body.password,
      )
    ) {
      return responses.signupInvalidInfo(res);
    }

    const result = await dbPool.execute(
      "INSERT INTO user (username,first_name,last_name,birth_date,address,email,password_hash,phone_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        req.body.username,
        req.body.firstName,
        req.body.lastName,
        req.body.birthDate,
        req.body.address,
        req.body.email,
        await passwordHashing.hashPassword(req.body.password),
        req.body.phoneNumber,
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
      return responses.loginInvalidInfo(res);
    }

    // Get all the user's info
    const [results, fields] = await dbPool.execute(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );

    if (!results[0]) {
      return responses.loginInvalidInfo(res);
    }

    const userId = results[0].user_id;
    const hashedPassword = results[0].password_hash;

    // Check if the password is correct
    if (!(await passwordHashing.verifyPassword(password, hashedPassword))) {
      return responses.loginInvalidInfo(res);
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

exports.logOut = (req, res) => {
  res.cookie("jwt", "logged out", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({
    status: "success",
    message: "logged out",
  });
};

exports.restrictTo =
  (...roles) =>
  (req, res, next) => {
    // roles ["Admin","User"] etc

    //Check if the role has access
    if (!roles.includes(req.user.role)) {
      return responses.permissionDenied(res);
    }

    //If reached it means the role has access
    next();
  };

exports.protect = async (req, res, next) => {
  let token;

  if (req.cookies.jwt) {
    token = req.cookies.jwt;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  console.log(token);

  if (token === "null") {
    console.log("Token is null or undefined");
    return responses.notLoggedIn(res);
  }

  //Makes a sync func return a promise
  const decoded = await jwt.verify(token, process.env.JWT_SECRET);

  //3. Check is user still exits
  const [results, fields] = await dbPool.execute(
    "SELECT user_id, username, role FROM user WHERE user_id = ?",
    [decoded.userId],
  );

  if (!results[0]) {
    return responses.userNotExist(res);
  }

  const currUser = {
    userId: results[0].user_id,
    username: results[0].username,
    role: results[0].role,
  };

  //Grant access to protected route
  //Store user into request (VERY IMPORTANT!)
  req.user = currUser;
  res.locals.user = currUser;

  next();
};
