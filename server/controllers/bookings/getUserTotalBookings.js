const bookingCollection = require("../../model/bookingModel");

const getUserTotalBooking = async (req, res) => {
    const email = req.query.email;

    const filter = { renterEmail: email };
    const total = (await bookingCollection.find(filter)).length;
    res.send({ total });

}


module.exports = getUserTotalBooking;