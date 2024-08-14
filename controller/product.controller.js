const Product = require("../model/product.model")

exports.addNewProduct =async (req, res) => {
    try{
        let title = await Product.findOne({title: req.body.title});
        // console.log(product);
        if(title){
            return res.status(400).json({message: "Product already exists"});
        }
        title = await Product.create(req.body);
        res.status(201).json({title, message: "User Addede Success"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
        
    }
};

exports.getAllProduct =async (req, res) => {
    try{
        let titles = await Product.find();
        res.status(200).json(titles);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
};

exports.getProduct =async (req, res) => {
    try{
        // let titles = await Product.findOne({title: req.query.title});
        // let titles = await Product.findOne({_id: req.query.productId});
        let titles = await Product.findById(req.query.productId);
        console.log(titles);
        if(!titles) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(titles);
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
};

// exports.replaceProduct = (req, res) => {
//     let id = +req.params.id;
//     let productIndex = producttitle.findIndex((item) => item.id === id);
//     producttitle.splice(productIndex, 1, req.body);
//     res.json({message: "Product Replaced Success"});
// };

// exports.updateProduct = (req, res) => {
//     let id = +req.params.id;
//     let productIndex = producttitle.findIndex((item) => item.id === id);
//     let product = producttitle[productIndex];
//     producttitle.splice(productIndex, 1, {...product,...req.body});
//     res.json({message: "Product Update Success"});
// };

// exports.deleteProduct = (req, res) => {
//     let id = +req.params.id;
//     let productIndex = producttitle.findIndex((item) => item.id === id);
//     producttitle.splice(productIndex, 1);
//     res.json({message: "Product Delete Success"});
// };
