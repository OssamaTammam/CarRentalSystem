const argon2 = require("argons2");
exports.hashPassword = async (password) => {
  return await argon2.hash(password);
};

exports.verifyPassword = async (password, hashedPassword) => {
  return await argon2.verify(hashedPassword, password);
};
