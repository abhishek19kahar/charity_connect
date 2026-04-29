const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({

  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true
  },

  ngoName:String,
  city:String,
  area:String,
  category:String,
  address:String,

  amount:{
    type:Number,
    default:0
  },

  status:{
    type:String,
    default:"selected"
  }

},{timestamps:true});

module.exports = mongoose.model("donations", DonationSchema);