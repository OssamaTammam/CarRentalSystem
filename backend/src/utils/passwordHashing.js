const argon2 = require("argon2");

exports.hashPassword = async (password) => {
  const hashedPassword = await argon2.hash(password);
  console.log(password);
  console.log(hashedPassword);
  return hashedPassword;
};

exports.verifyPassword = async (password, hashedPassword) => {
  return await argon2.verify(hashedPassword, password);
};
