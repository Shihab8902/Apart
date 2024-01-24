const bookingCollection = require("../../model/bookingModel");

const saveNewBooking = async (req, res) => {
    const data = req.body;

    const newBooking = bookingCollection(data);
    const result = await newBooking.save();
    res.send(result);
}


module.exports = saveNewBooking;