const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : String,
    oldprice : {
        type:Number
    },
    price : {
        type : Number
    },
    email : {
        type : String,
        unique: true,
    },
    password : {
        type: String,
    },
    mobileNo : {
        type : String,
    },
    productImage : {
        type: String,
    },
    category : {
        type : String
    },
    isDelete : {
        type: Boolean,
        default: false,
    }
},{
    versionKey : false,
    timestamps: true
});

module.exports = mongoose.model('products', productSchema);