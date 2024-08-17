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

exports.updateProduct = async (req, res) => {
    try{
        let titles = await Product.findById(req.query.productId);
        if(!titles) {
            return res.status(404).json({message: 'Product not found.....'});
        }
        // titles = await Product.updateOne({_id:titles._id}, req.body, {new: true});
        // titles = await Product.findOneAndUpdate({_id: titles._id}, req.body, {new: true});
        titles = await Product.findByIdAndUpdate(titles._id,{$set: req.body}, {new: true});
        res.status(202).json({titles, message: "Product Updated successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

exports.deleteProduct = async (req, res) => {
    try{
        let titles = await Product.findById(req.query.productId);
        if(!titles) {
            return res.status(404).json({message: 'Product not found.....'});
        }
        // titles = await Product.deleteOne({_id: titles._id});
        titles = await Product.findOneAndDelete({_id: titles._id});
        // titles = await Product.findByIdAndDelete(user._id);
        res.status(200).json({titles, message: "Product Delete successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}