const express = require('express');
const morgan = require('morgan');
const app = express(); 
const mongoose = require('mongoose'); 
const userRoutes = require('./routes/user.routes') 


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
    res.send("Welcome to Express server");
})

app.use("/api/user", userRoutes);

app.listen(1212, () => {
    //Database Connection
    mongoose
    .connect("mongodb://127.0.0.1:27017/mongooseapi")
    .then(() => console.log("Databasse Connection established Success ..."))
    .catch((err) => console.error(err));
    console.log(`Server Start at http://localhost:1212`);
});