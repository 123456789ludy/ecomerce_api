const express = require('express');
const cartsController = require('../controllers/cart.controllers');
const router = express.Router();
/**
 * @openapi
 * /api/v1/cart:
 *   post:
 *     summary: Create a new product
 *     tags: [Cart]
 *     requestBody:
 *       description: Required fields to create a new product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/productCreate'
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: prodcut create
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: validation error
 *   get:
 *     summary: Request all products
 *     tags: [Cart]
 *     requestBody:
 *       description: Return all products
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             $ref: "#/components/schemas/Product"
 *     responses:
 *       200:
 *         description: Successful operation, return all products
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Poduct"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not found / something wrong /
 *   put:
 *     summary: Update an existing product
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: ID product update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             $ref: "#/components/schemas/ProductUpdate"
 *     responses:
 *       200:
 *         description: Product updated succes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ProductUpdate"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not found / something wrong /
 *   delete:
 *     summary: delete product
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         description: ID product deleted
 *     responses:
 *       200:
 *         description: Deleted product succes
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/PoductDelete"
 *       400:
 *         description: not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: product not found / something wrong /
 */
// Obtener todos los elementos del carrito
//router.get("/", cartsController.getCartAll);

// Obtener el carrito de compras de un usuario específico
router.get("/:id", cartsController.getUserCart);

// Agregar un elemento al carrito
router.post("/", cartsController.addProductToCart);

// Modificar la cantidad de un elemento en el carrito
router.put("/:id", cartsController.updateCartItemQty);

// Eliminar un elemento del carrito
router.delete("/:id", cartsController.removeCartItem);



module.exports = router;
