const express = require('express');
const morgan = require('morgan');
const product = express();   
const productRoutes = require("./routes/product.routes");


product.use(morgan("dev"));
product.use(express.json());
product.use(express.urlencoded({extended: false}));


product.get("/", (req, res) => {
    res.send("Welcome to Express server");
})

product.use("/product", productRoutes)


product.listen(3000, () => {
    console.log(`Server Start at http://localhost:3000`);
});