const mongoose = require("mongoose");

const reciverSchema = new mongoose.Schema({
    name:{
      type:String
    },
    email: {
        type : String,
        required: true,
        unique: true,
    }, 
    password: {
        type : String,
        required: true
    },
 
},
{ versionKey: false })

const Reciver = mongoose.model("reciver", reciverSchema);

module.exports = Reciver;