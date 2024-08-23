const Product = require("../model/product.model")
const jwt = require("jsonwebtoken"); 

exports.registerProduct = async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.body._id, isDelete: false });
        if (product) {
            return res.json({ message: 'Product already exists' });
        }
        product = await Product.create({...req.body});
        res.status(201).json({ product, message:'Register Success...' });
    } catch (error) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
};

exports.loginProduct = async (req, res) => {
    try {
        let title = await Product.findOne({ email: req.body.email, isDelete: false });
        if (!title) {
            return res.json({ message: 'Product Email Not Found...' });
        }
        let comparedPassword = await bcrypt.compare(req.body.password, product.password);
        // console.log(comparedPassword);
        if(!comparedPassword) {
            return res.json({ message: 'Email or Password does not matched' });
        }

        let token = await jwt.sign({ productId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ message:'Login Success...', token });
    } catch (error) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
};

exports.getProfile = async (req, res) => {
    try {
        res.json(req.title);
    } catch (error) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
}