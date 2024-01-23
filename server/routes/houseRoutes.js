const getHouses = require("../controllers/house/getHouses");
const getTotalHouseData = require("../controllers/house/getTotalHouseData");

const router = require("express").Router();


//Get all houses
router.get("/api/houses", getHouses);

//Get total house count
router.get("/api/houses/total", getTotalHouseData);


module.exports = router;