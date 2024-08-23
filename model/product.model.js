const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : String,
    price : {
        type : Number
    },
    description : {
        type: String
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