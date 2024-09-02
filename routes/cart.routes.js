const express = require('express');
const cartRoutes = express.Router();
const {
    addtoCart,
    getAllCarts,
    deleteCart,
    updateCart
} = require('../controller/cart.controller');
const {verifyToken} = require('../helpers/verifyToken');

cartRoutes.post("/add", verifyToken, addtoCart);
cartRoutes.get("/getall", verifyToken, getAllCarts);
cartRoutes.put("/update", verifyToken, updateCart);
cartRoutes.delete("/delete", verifyToken, deleteCart);

module.exports = cartRoutes;