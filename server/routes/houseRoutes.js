const getHouses = require("../controllers/house/getHouses");

const router = require("express").Router();


//Get all houses
router.get("/api/houses", getHouses);


module.exports = router;