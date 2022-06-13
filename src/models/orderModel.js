const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema = new mongoose.Schema( {
   userId:{
      type:ObjectId,
      ref:"User"
   },
   productId:{
      type:ObjectId,
      ref:"Product"
   },
   amount:Number,
   isfreeappuser:{
      type:Boolean,
      default:false
   }
 
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema) 
