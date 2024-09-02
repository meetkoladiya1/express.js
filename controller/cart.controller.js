const Cart = require('../model/cart.model');

exports.addtoCart = async (req, res) => {
    try {
        let cart = await Cart.findOne({
            user: req.user._id,
            productId: req.body.productId,
            isDelete: false,
        });
        if(cart){
            return res.json({message: "Already Exists"});
        }
        cart = await Cart.create({
            user: req.user._id,
            ...req.body,
        });
        res.status(201).json({message: "Added to Cart", cart});
    } catch (error) {
     console.log(err);
        res.status(500).json({message: "Server Error"});
    }
};

exports.getAllCarts = async(req,res) =>{
    try {
        let carts = await Cart.find({user: req.user._id,isDelete:false});
        res.json(carts)
    } catch (err) {
        console.log(err);
        res.status(500).json({msg:" server error"}) 
    }
}

exports.updateCart = async(req,res)=>{
    try{
      let cart = await Cart.findOne({_id: req.query.cartId})
      if(!cart){
        return res.status(404).json({message:"cart not found"})
      }
      // let qut = req.body.quantity 
      let quantity = req.body.quantity += cart.quantity
    //   console.log(quantity)
      cart = await Cart.findByIdAndUpdate(cart._id,{$set:req.body},{new:true})
      res.status(202).json({cart, message:"Cart updated SuccessFully"})
    }
    catch (err) {
      console.log(err);
      res.status(500).json({ message: "Internal server Error" })
    }
}

exports.deleteCart = async (req,res) =>{
    try {
          let cart = await Cart.findByIdAndUpdate({_id:req.query.cartId,isDelete:"false"});
          if(!cart){
            return res.status(404).json({msg:"cart not found"})
          }
          cart = await Cart.findByIdAndUpdate(cart._id,{isDelete:true},{new:true})
          res.status(200).json({msg:"cart data delete successfully..."})
    } 
    catch (err) {
         console.log(err);
         res.status(500).json({msg:"internal serevr error"})
          
    }
}