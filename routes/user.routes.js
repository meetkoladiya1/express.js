const express = require('express');
const userRoutes = express.Router();
const {
    registerUser,
    loginUser,
    getProfile,
    updateProfile,
    specialUser
} = require("../controller/user.controller");
const { verifyToken } = require('../helpers/verifyToken');
const { upload } = require('../helpers/imageUpload');


userRoutes.post('/register', upload.single('profileImage'), registerUser);
userRoutes.post('/login', loginUser);
userRoutes.get('/me', verifyToken, getProfile);
userRoutes.put('/update-user', verifyToken, updateProfile);
userRoutes.post('/reg', specialUser);

module.exports = userRoutes;