const bookingCollection = require("../../model/bookingModel");

const getOwnerBookings = async (req, res) => {
    const email = req.query.email;
    const filter = { email: email };

    const result = await bookingCollection.find(filter);
    res.send(result);
}


module.exports = getOwnerBookings;