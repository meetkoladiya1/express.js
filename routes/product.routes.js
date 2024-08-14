const express = require('express');
const productRoutes = express.Router();
const{
    addNewProduct,
    getAllProduct,
    getProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} = require("../controller/product.controller")

productRoutes.post('/', addNewProduct);

productRoutes.get('/', getAllProduct)

productRoutes.get("/get-product", getProduct)

// productRoutes.put("/:id", replaceProduct)

// productRoutes.patch("/:id", updateProduct)

// productRoutes.delete("/:id", deleteProduct)

module.exports = productRoutes;