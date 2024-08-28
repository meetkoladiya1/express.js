require("dotenv").config();
const express = require('express');
const morgan = require('morgan');
const app = express(); 
const mongoose = require('mongoose'); 
const userRoutes = require('./routes/user.routes') 
const port = process.env.PORT
const productRoutes = require("./routes/product.routes");
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/public/images", express.static(path.join(__dirname, "/public/images")))
app.use("/public", express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.send("Welcome to Express server");
})

app.use("/api/user", userRoutes);
// app.use("/api/product", productRoutes);

app.listen(port, () => {
    //Database Connection
    mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Databasse Connection established Success ..."))
    .catch((err) => console.error(err));
    console.log(`Server Start at http://localhost:${port}`);
});