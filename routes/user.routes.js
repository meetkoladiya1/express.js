const express = require('express');
const userRoutes = express.Router();
const {
    addNewUser,
    getAllUsers,
    getUser,
    replaceUser,
    updateUser,
    deleteUser
} = require("../controller/user.controller")

userRoutes.post('/', addNewUser)

userRoutes.get('/', getAllUsers)

userRoutes.get("/get-user", getUser)

// userRoutes.put("/:id", replaceUser)

// userRoutes.patch("/:id", updateUser)

// userRoutes.delete("/:id", deleteUser)

module.exports = userRoutes;