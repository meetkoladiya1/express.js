const express = require('express');
const cartRoutes = express.Router();
const {
    addtoCart,
    getAllCarts,
    deletecart,
    updatecart
} = require('../controller/cart.controller');
const {verifyToken} = require('../helpers/verifyToken');

cartRoutes.post("/add", verifyToken, addtoCart);
cartRoutes.get("/getall", verifyToken, getAllCarts);
cartRoutes.put("/update", verifyToken, updatecart);
cartRoutes.delete("/delete", verifyToken, deletecart);

module.exports = cartRoutes;