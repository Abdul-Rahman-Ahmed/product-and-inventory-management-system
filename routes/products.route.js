const express = require("express");
const Router = express.Router();
const { getProducts } = require("../controllers/products.controller");
Router.get("/", getProducts);

module.exports = Router;
