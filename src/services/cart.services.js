
const models = require("../models");
const {products, orders, cart, users, productInCart, productInOrder} = models;


class CartServices {
  static async addProductToCart(productId, userId) {
    try {
        const user = await users.findOne({ where: { id: userId } });
        if (!user) {
          throw new Error("Usuario no encontrado");
        }
        const product = await products.findOne({ where: { id: productId } });
        if (!product) {
          throw new Error("Producto no encontrado");
        }
        const productInCartItem = await productInCart.create({
          userId,
          productId,
        });
        return productInCartItem;
    } catch (error) {
      throw error;
    }
  }


  static async getUserCart(id) {
    try {
      const productsInCart = await productInCart.findAll({
        where: { id },
        include: [
          {
            model: products,
            as: "product",
          },
        ],
      });
      return productsInCart;
    } catch (error) {
      throw error;
    }
  }

  static async updateCartItemQty(id, productID, quantity) {
    try {
      const [updated] = await cart.update({ productID, quantity }, {
        where: { id },
        returning: true,
      });
      return updated;
    } catch (error) {
      throw error;
    }
  }

  static async removeCartItem(userId, productId) {
    try {
      const deleted = await productInCart.destroy({
        where: { userId, productId },
      });
      return deleted;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CartServices;

