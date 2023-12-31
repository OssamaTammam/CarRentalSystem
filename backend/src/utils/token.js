const jwt = require("jsonwebtoken");

const signJWT = async (userId) =>
  await jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

exports.createJWT = async (userId, res) => {
  const token = await signJWT(userId);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000,
    ),
    secure: false, //HTTPS only
    httpOnly: false, //Makes cookie not accessible by js
    sameSite: "None",
  };

  res.cookie("jwt", token, cookieOptions);
  return token;
};
