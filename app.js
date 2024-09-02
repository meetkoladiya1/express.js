require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const app = express(); 
const mongoose = require('mongoose'); 
const port = process.env.PORT
const userRoutes = require('./routes/user.routes') 
const productRoutes = require("./routes/product.routes");
const cartRoutes = require('./routes/cart.routes')
const cors = require("cors");
const path = require("path");
const ejs = require("ejs"); 

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/public/images", express.static(path.join(__dirname, "/public/images")))
app.use("/public", express.static(path.join(__dirname, "public")))

app.set("view engine", 'ejs');

app.get("/", (req, res) => {
    res.send("Welcome to Express server");
})

// app.use("/api/user", userRoutes);
// app.use("/api/product", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(port, () => {
    //Database Connection
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Databasse Connection established Success ..."))
    .catch((err) => console.error(err));
    console.log(`Server Start at http://localhost:${port}`);
});