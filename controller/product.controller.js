const producttitle = require("../product.json");

exports.addNewProduct =async (req, res) => {
    try{
        const user = await User.create(req.body);
        res.status(201).json({user, message: "User Addede Success"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Internal Server Error"});
        
    }
};

// exports.getAllProduct = (req, res) => {
//     res.json(producttitle);
// };

// exports.getProduct = (req, res) => {
//     let id = +req.params.id;
//     let item = producttitle.find((product)=>product.id === id);
//     res.json(item);
// };

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
