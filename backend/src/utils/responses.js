exports.resGenerator = (res, statusCode, status, message) => {
  return res.status(statusCode).json({
    status,
    message,
  });
};

exports.reqBodyEmpty = (res) => {
  return res.status(400).json({
    status: "fail",
    message: "request body can't be empty",
  });
};

exports.signupInvalidInfo = (res) => {
  return res.status(400).json({
    status: "fail",
    message:
      "Invalid info username must be 4 characters or more, password must be 8 characters or more and email must be on valid form",
  });
};

exports.loginInvalidInfo = (res) => {
  return res.status(400).json({
    status: "fail",
    message: "Email or password incorrect",
  });
};

exports.permissionDenied = (res) => {
  return res.status(400).json({
    status: "fail",
    message: "You don't have the privileges to do this action",
  });
};

exports.notLoggedIn = (res) => {
  return res.status(400).json({
    status: "fail",
    message: "You are not logged in",
  });
};

exports.userNotExist = (res) => {
  return res.status(400).json({
    status: "fail",
    message: "User no longer exists",
  });
};
