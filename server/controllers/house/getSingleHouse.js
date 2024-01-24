const { default: mongoose } = require("mongoose");
const houseCollection = require("../../model/houseModel");

const getSingleHouse = async (req, res) => {
    try {
        const id = req.params.id;
        const filter = { _id: new mongoose.Types.ObjectId(id) };
        const result = await houseCollection.findOne(filter);
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = getSingleHouse;