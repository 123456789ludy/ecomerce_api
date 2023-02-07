const ProductServices = require('../services/products.services');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductServices.getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
};

const ProductCreate = async (req, res, next) => {
  try {
    const {id} = req.params;
    const { body } = req;
    const newProduct = { ...body, id };
    const result = await ProductServices.createProduct(newProduct);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const ProductUpdate = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {body} = req;
    const result= await ProductServices.updateProduct(id, body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}


const ProductDelete = async (req, res, next) => {
  try {
    const {id} = req.params;
    const result = await ProductServices.deleteProduct(id)
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllProducts, ProductCreate, ProductUpdate, ProductDelete };
