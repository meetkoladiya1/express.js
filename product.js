require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const product = express();   
const mongoose = require('mongoose');
const productRoutes = require("./routes/product.routes");
const port = process.env.PORT
const dbURL = process.env.MONGO_URL

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
    .connect(dbURL)
    .then(() => console.log("Databasse Connection established Success ..."))
    .catch((err) => console.error(err));
    console.log(`Server Start at http://localhost:${port}`);
});
