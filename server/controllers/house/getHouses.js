const houseCollection = require("../../model/houseModel");

const getHouses = async (req, res) => {
    try {
        const result = await houseCollection.find();
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = getHouses;