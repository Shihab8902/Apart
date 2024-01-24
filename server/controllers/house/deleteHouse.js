const { default: mongoose } = require("mongoose");
const houseCollection = require("../../model/houseModel");

const deleteHouse = async (req, res) => {
    const id = req.query.id;
    const result = await houseCollection.findByIdAndDelete(new mongoose.Types.ObjectId(id));
    res.send(result);
}


module.exports = deleteHouse;