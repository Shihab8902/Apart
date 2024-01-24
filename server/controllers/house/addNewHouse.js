const houseCollection = require("../../model/houseModel");

const addNewHouse = async (req, res) => {
    try {
        const data = req.body;
        const newHouse = houseCollection(data);
        const result = await newHouse.save();
        res.status(200).send(result);

    }
    catch (error) {
        console.log(error);
    }
}


module.exports = addNewHouse;