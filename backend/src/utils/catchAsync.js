module.exports = (fn) => (req, res, nex) => {
  fn(req, res, next).catch(next);
};
