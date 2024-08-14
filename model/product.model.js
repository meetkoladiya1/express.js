const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : String,
    oldprice : {
        type:Number
    },
    price : {
        type : Number
    },
    category : {
        type : String
    }
});

module.exports = mongoose.model('products', productSchema);