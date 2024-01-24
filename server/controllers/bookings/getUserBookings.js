const bookingCollection = require("../../model/bookingModel");

const getUserBookings = async (req, res) => {
    const email = req.query.email;

    const filter = { renterEmail: email };
    const result = await bookingCollection.find(filter);
    res.send(result);
}


module.exports = getUserBookings;