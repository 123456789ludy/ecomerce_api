const initModels = require("./init-models");
const db = require("../utils/database");

const models = initModels(db);

const { cart, orders, productInCart, productInOrder, products, users } = models;

module.exports = {
  cart,
  orders,
  productInCart,
  productInOrder,
  products,
  users,
};
