const houseCollection = require("../../model/houseModel");

const getTotalHouseData = async (req, res) => {
    try {
        const result = await houseCollection.estimatedDocumentCount();
        res.status(200).send({ total: result });
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = getTotalHouseData;