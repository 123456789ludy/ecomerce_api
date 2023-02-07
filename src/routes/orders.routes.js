const express = require('express');
const orderController = require('../controllers/orders.controller');
const router = express.Router();

/**
 * @openapi
 * /api/v1/orders:
 *   post:
 *     summary: Create a new product
 *     tags: [Orders]
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
 *     tags: [Orders]
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
 */

router.post('/', orderController.createOrder);
router.get('/', orderController.getAllOrders);
router.get('/:id', orderController.getOrderById);

module.exports = router;
