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
