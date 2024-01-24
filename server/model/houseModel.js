const mongoose = require("mongoose");

const houseSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    bedrooms: {
        type: Number,
        require: true
    },
    bathrooms: {
        type: Number,
        require: true
    },
    roomSize: {
        type: String,
        require: true
    },
    picture: {
        type: String,
        require: true
    },
    availabilityDate: {
        type: mongoose.Schema.Types.Mixed,
        require: true
    },
    rentPerMonth: {
        type: Number,
        require: true
    },
    phoneNumber: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    isAvailable: {
        type: Boolean,

    },
    listedOn: {
        type: Date,
        require: true,
        default: Date.now()
    }

});


const houseCollection = mongoose.model("houses", houseSchema);


module.exports = houseCollection;