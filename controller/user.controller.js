const users = require('../friend.json');

exports.addNewUser =async (req, res) => {
    users.push(req.body);
    res.json({ message: "User Addede Success"});
};

exports.getAllUsers = (req, res) => {
    res.json(users);
};

exports.getUser = (req, res) => {
    let id = +req.params.id;
    let item = users.find((user)=>user.id === id);
    res.json(item);
};

exports.replaceUser = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id);
    users.splice(userIndex, 1, req.body);
    res.json({message: "User Replaced Success"});
};

exports.updateUser = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id);
    let user = users[userIndex];
    users.splice(userIndex, 1, {...user,...req.body});
    res.json({message: "User Update Success"});
};

exports.deleteUser = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findIndex((item) => item.id === id);
    users.splice(userIndex, 1);
    res.json({message: "User Delete Success"});
};