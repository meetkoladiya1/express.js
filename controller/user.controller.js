const User = require("../model/user.model");
const bcrypt = require("bcrypt");  
const jwt = require("jsonwebtoken"); 
const fs = require("fs").promises;

exports.registerUser = async (req, res) => {
    try {
        let imagePath = "";
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if (user) { 
            return res.json({ message: 'User already exists' });
        }
        if(req.file){
            // console.log(req.file);
            imagePath = req.file.path.replace(/\\/g, "/");
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        // console.log(hashPassword);
        user = await User.create({...req.body, password: hashPassword, profileImage: imagePath});
        res.status(201).json({ user, message:'Register Success...' });
    } catch (err) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
};

exports.loginUser = async (req, res) => {
    try {
        let user = await User.findOne({ email: req.body.email, isDelete: false });
        if(!user) {
            return res.json({ message: 'User Not Found...' });
        }
        let comparedPassword = await bcrypt.compare(req.body.password, user.password);
        // console.log(comparedPassword);
        if(!comparedPassword) {
            return res.json({ message: 'Email or Password does not matched' });
        }

        let token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ message:'Login Success...', token });
    } catch (err) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
};

exports.getProfile = async (req, res) => {
    try {
        res.json(req.user);
    } catch (error) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
}

exports.updateProfile = async (req, res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndUpdate( user._id, {$set: req.body}, {new: true} );
        res.status(202).json({user, message : 'User Profile Update ...'});
    } catch (error) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
}

exports.deleteProfile = async (req, res) => {
    try {
        let user = req.user;
        user = await User.findByIdAndDelete ( user._id, {$set: req.body}, {new: true} );
        res.status(202).json({user, message : 'User Profile Delete ...'});
    } catch (error) {
        console.log(err);
        res.status(500).json({message : 'Server Error'});
    }
}

exports.specialUser = async (req, res) => {
    try{
        let user = {
            firstName: 'Varun',
            lastName: 'Dhawan',
            age: 26,
            email: 'vdhavan@test.in',
            mobileNo: "123457890",
            hobbies: ['Travel', 'Gym']
        };
        // let user = await User.findOne({firstName: req.query.name, isDelete: false});
        // if(!user){
        //     return res.render('notfound.ejs');
        // }
        // res.render('student.hbs', {user});
        // res.render('user.ejs', {user});
    } catch (err){
        console.log(err);
        res.status(500).json({message: "Server Error"});
    }
}
