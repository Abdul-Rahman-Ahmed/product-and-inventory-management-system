const asyncWrapper = require("../middlewares/asyncWrapper");

const getProducts = asyncWrapper(async (req, res, next) => {
  const products = {};
  return res.json({ products });
});

module.exports = { getProducts };
