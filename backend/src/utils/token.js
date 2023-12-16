const jwt = require("jsonwebtoken");

const signJWT = (userId) =>
  jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.createJWT = (userId, res) => {
  const token = signJWT(userId);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    // secure: true, //HTTPS only
    httpOnly: true, //Makes cookie not accessible by js
  };

  res.cookie("jwt", token, cookieOptions);
  return token;
};
