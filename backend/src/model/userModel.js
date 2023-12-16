const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.checkSignUpInfo = (username, email, password) => {
  if (!EMAIL_REGEX.test(email)) return false;
  if (password.length < 8) return false;
  if (username < 4) return false;

  return true;
};

exports.checkLoginInfo = (email) => {
  if (!EMAIL_REGEX.test(email)) return false;
  return true;
};
