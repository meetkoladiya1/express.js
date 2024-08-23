const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
const Product = require("../model/product.model");

exports.verifyToken = async (req, res, next) => {
    try {
        let authorization = req.headers['authorization'];
        if (!authorization) {
            return res.json({message: 'not authorization'});
        }
        let token = authorization.split(' ')[1];
        let {userId} = await jwt.verify(token, process.env.JWT_SECRET);
        let user = await User.findOne({ _id: userId, isDelete: false });
        if (!user) {
            returnres.json({message: 'User not found'})
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(err);
        res.status(500).json({message: "Server Error"})
    }
}

exports.verifyTokenProduct = async (req, res, next) => {
    try {
        let authorization = req.headers['authorization'];
        if (!authorization) {
            return res.json({message: 'not authorization'});
        }
        let token = authorization.split(' ')[1];
        let {productId} = await jwt.verify(token, process.env.JWT_SECRET);
        let product = await Product.findOne({ _id: productId, isDelete: false });
        if (!product) {
            returnres.json({message: 'Product not found'})
        }
        req.product = product;
        next();
    } catch (error) {
        console.log(err);
        res.status(500).json({message: "Server Error"})
    }
}