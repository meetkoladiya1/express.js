const Order = require('../model/order.model');
const Cart = require('../model/cart.model');

exports.addNewOrder = async (req, res) => {
    try {
        let carts = await Cart.find({
            user: req.user._id,
            isDelete: false,
        }).populate({ path: "productId" });

        if(cartRoutes.length === 0){
            return res.json({message: "No Cart Found"});
        }

        let orderItems = carts.map((item) =>({
            productId: item.productId._id,
            quantity: item.quantity,
            price: item.productId.price,
            totalPrice: item.quantity * item.productId.price
        }))
        // console.log(orderItems);
        let amount = orderItems.reduce((total, item) => total =+item.totalPrice, 0);
        // console.log(amount);

        let order = await Order.create({
            user: req.user._id,
            items: orderItems,
            paidAmount: amount
        });
        await Cart.updateMany({user: req.user._id, isDelete: false}, {isDelete: true});
        res.status(201).json({message: "Order Placed", order});
    } catch (error) {
     console.log(err);
        res.status(500).json({message: "Server Error"});
    }
}


// let find = [
//     {
//         $match: { user: req.user._id, isDelete: false },
//     },
//     {
//         $lookup: {
//             from: 'products',
//             localField: 'productId',
//             foreignField: '_id',
//             as: 'product',
//         }
//     }
// ];
// let carts = await Cart.aggregate(find);