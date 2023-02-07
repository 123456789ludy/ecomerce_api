const models = require("../models");
const { Op } = require("sequelize");
const { cart, orders, productInCart, productInOrder, products, users } = models;

class ProductServices {
  static async getAllProducts() {
    try {
      const Products = await products.findAll({
        where: {
          available_qty: {
            [Op.gt]: 0,
          },
        },
        attributes: {
          exclude: ["user_id"],
        },
        include: {
          model: users,
          as: "user",
          attributes: {
            exclude: ["password", "email", "username"],
          },
        },
      });
      return Products;
    } catch (error) {
      throw error;
    }
  }

  static async createProduct(newObject) {
    try {
      const Product = await products.create(newObject);
      return Product;
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(id, body) {
    try {
      const idProduct = await products.findOne({ where: { id } });
      const Product = await idProduct.update({ ...body });
      return Product;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(id) {
    try {
      const idProduct = await products.findOne({ where: { id } });
      const result = await idProduct.destroy();
      return result;
    } catch (error) {
      throw error;
    }
  }
}
module.exports = ProductServices;
