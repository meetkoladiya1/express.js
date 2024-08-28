const express = require('express');
const productRoutes = express.Router();
const{
    registerProduct,
    loginProduct,
    getProfile
} = require("../controller/product.controller")
const { verifyToken, verifyTokenProduct } = require('../helpers/verifyToken');

productRoutes.post('/register', registerProduct);
productRoutes.post('/login', loginProduct);
// productRoutes.get('/me', verifyTokenProduct, getProfile);

module.exports = productRoutes;