const cartServices = require("../services/cart.services");

   const addProductToCart =  async(req, res) => {
    try {
      const { productId } = req.body;
      const { userId } = req.params;
      const productInCart = await cartServices.addProductToCart(
        productId,
        userId
      );
      return res.status(201).json({
        message: "Producto agregado al carrito exitosamente",
        data: productInCart,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  const getUserCart =  async(req, res) =>{
    try {
      const { id } = req.params;
      const productsInCart = await cartServices.getUserCart(id);
      return res.status(200).json({
        message: "Productos en el carrito del usuario",
        data: productsInCart,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  const updateCartItemQty =  async(req, res) =>{
    try {
      const { id, quantity } = req.body;
      const { productId } = req.params;
      const updatedCartItem = await cartServices.updateCartItemQty(
        id,
        productId,
        quantity
      );
      return res.status(200).json({
        message: "Cantidad de producto en carrito actualizada",
        data: updatedCartItem,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
  const removeCartItem =  async(req, res) =>{
    try {
      const { userId, productId } = req.params;
      const deleted = await cartServices.removeCartItem(userId, productId);
      return res.status(200).json({
        message: "Producto eliminado del carrito",
        data: deleted,
      });
    } catch (error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }



module.exports = {
  addProductToCart,
  getUserCart,
  updateCartItemQty,
  removeCartItem,
};
