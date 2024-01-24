const mongoose = require("mongoose");
const bookingCollection = require("../../model/bookingModel")

const deleteBooking = async (req, res) => {
    const id = req.query.id;
    const result = await bookingCollection.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    res.send(result);
}


module.exports = deleteBooking;