const { default: mongoose } = require("mongoose");
const houseCollection = require("../../model/houseModel");

const updateHouse = async (req, res) => {
    try {
        const id = req.query.id;
        const data = req.body;
        const result = await houseCollection.findByIdAndUpdate(new mongoose.Types.ObjectId(id), data);
        res.send(result);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = updateHouse;