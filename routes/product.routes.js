const express = require('express');
const productRoutes = express.Router();
const{
    registerProduct,
    loginProduct
} = require("../controller/product.controller")

productRoutes.post('/', registerProduct);
productRoutes.post('/', loginProduct);

module.exports = productRoutes;