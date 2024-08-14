const express = require('express');
const morgan = require('morgan');
const product = express();   
const mongoose = require('mongoose');
const productRoutes = require("./routes/product.routes");


product.use(morgan("dev"));
product.use(express.json());
product.use(express.urlencoded({extended: false}));


product.get("/", (req, res) => {
    res.send("Welcome to Express server");
})

product.use("/api/product", productRoutes)


product.listen(3000, () => {
    //Database Connection
    mongoose
    .connect("mongodb://127.0.0.1:27017/products")
    .then(() => console.log("Databasse Connection established Success ..."))
    .catch((err) => console.error(err));
    console.log(`Server Start at http://localhost:3000`);
});