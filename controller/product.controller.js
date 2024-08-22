const Product = require("../model/product.model")
const bcrypt = require("bcrypt");   

exports.registerProduct = async (req, res) => {
    try {
        let product = await Product.findOne({ email: req.body.email, isDelete: false });
        if (product) {
            return res.json({ message: 'Product Email already exists' });
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        // console.log(hashPassword);
        product = await Product.create({...req.body, password: hashPassword});
        res.status(201).json({ product, message:'Register Success...' });
    } catch (error) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
};

exports.loginProduct = async (req, res) => {
    try {
        let product = await Product.findOne({ email: req.body.email, isDelete: false });
        if (!product) {
            return res.json({ message: 'Product Email Not Found...' });
        }
        let comparedPassword = await bcrypt.compare(req.body.password, product.password);
        // console.log(comparedPassword);
        if(!comparedPassword) {
            return res.json({ message: 'Email or Password does not matched' });
        }
        res.status(200).json({ message:'Login Success...', user });
    } catch (error) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
};