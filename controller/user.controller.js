const User = require("../model/user.model");

exports.addNewUser =async (req, res) => {
    try{
        let user = await User.findOne({email: req.body.email});
        // console.log(user);
        if(user){
            return res.status(400).json({message: 'User already exist.....'});
        }
        user = await User.create(req.body);
        res.status(201).json({user, message: "User Addede Success"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
        
    }
};

exports.getAllUsers =async (req, res) => {
    try{
        let users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
        
    }
};

exports.getUser =async (req, res) => {
    try{
        // let user = await User.findOne({firstName: req.query.firstName});
        // let user = await User.findOne({_id: req.query.userId});
        let user = await User.findById(req.query.userId);
        if(!user) {
            return res.status(404).json({message: 'User not found.....'});
        }
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
};

exports.updateUser = async (req, res) => {
    try{
        let user = await User.findById(req.query.userId);
        if(!user) {
            return res.status(404).json({message: 'User not found.....'});
        }
        // user = await User.updateOne({_id:user._id}, req.body, {new: true});
        // user = await User.findOneAndUpdate({_id: user._id}, req.body, {new: true});
        user = await User.findByIdAndUpdate(user._id,{$set: req.body}, {new: true});
        res.status(202).json({user, message: "User Updated successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}

exports.deleteUser = async (req, res) => {
    try{
        let user = await User.findById(req.query.userId);
        if(!user) {
            return res.status(404).json({message: 'User not found.....'});
        }
        // user = await User.deleteOne({_id: user._id});
        user = await User.findOneAndDelete({_id: user._id});
        // user = await User.findByIdAndDelete(user._id);
        res.status(200).json({user, message: "User Delete successfully"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
    }
}