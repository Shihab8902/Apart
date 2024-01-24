const mongoose = require("mongoose");
const bookingCollection = require("../../model/bookingModel");

const getBooked = async (req, res) => {
    const id = req.query.id;
    const filter = { _id: new mongoose.Types.ObjectId(id) };

    const result = await bookingCollection.findOne(filter);

    if (result) {
        return res.send({ message: true });
    }

    res.send({ message: false });
}


module.exports = getBooked;