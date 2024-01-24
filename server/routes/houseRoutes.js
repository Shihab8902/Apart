const addNewHouse = require("../controllers/house/addNewHouse");
const deleteHouse = require("../controllers/house/deleteHouse");
const getHouses = require("../controllers/house/getHouses");
const getSingleHouse = require("../controllers/house/getSingleHouse");
const getTotalHouseData = require("../controllers/house/getTotalHouseData");
const getUserSpecificHouses = require("../controllers/house/getUserSpecificHouses");
const updateHouse = require("../controllers/house/updateHouse");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();


//Get all houses
router.get("/api/houses", getHouses);

//Get total house count
router.get("/api/houses/total", getTotalHouseData);

//Get user specific houses
router.get("/api/house", verifyToken, getUserSpecificHouses);

//Get single house data
router.get("/api/house/:id", getSingleHouse);

//Post a new house
router.post("/api/houses", verifyToken, addNewHouse);

//Update a house
router.put("/api/house", verifyToken, updateHouse);

//Delete a house
router.delete("/api/house", verifyToken, deleteHouse);


module.exports = router;