const houseCollection = require("../../model/houseModel");

const getUserSpecificHouses = async (req, res) => {
    try {
        const email = req.query.email;
        const query = { email: email };
        const result = await houseCollection.find(query);
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = getUserSpecificHouses;