const express = require('express');
const orderRoutes = express.Router();
const {
    addNewOrder,
} = require('../controller/order.controller');
const { verifyToken } = require('../helpers/verifyToken');
const { getAllcarts } = require('../controller/cart.controller');

orderRoutes.post('/', verifyToken, addNewOrder);
// orderRoutes.get('/', verifyToken, getAllcarts);

module.exports = orderRoutes;