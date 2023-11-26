const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
    reciver: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "reciver",
        required: true,

    },
    name: {
        type: String,

    },
    email: {
        type: String
    },
    mobile: {
        type: Number,
        min: 10,
        max: 13
    },
    address: {
        type: String
    },
    disesase: {
        type: String
    },
    group: {
        type: String
    },
    age: {
        type: Number
    },





},
    { versionKey: false })

const Donor = mongoose.model("Blood_donor", donorSchema);

module.exports = Donor;