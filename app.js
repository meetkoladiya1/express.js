const express = require('express');
const morgan = require('morgan');
const app = express(); 
const userRoutes = require('./routes/user.routes') 


app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
    res.send("Welcome to Express server");
})

app.use("user", userRoutes);

app.listen(1212, () => {
   
    console.log(`Server Start at http://localhost:1212`);
});