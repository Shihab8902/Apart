const deleteBooking = require("../controllers/bookings/deleteBooking");
const getBooked = require("../controllers/bookings/getBooked");
const getOwnerBookings = require("../controllers/bookings/getOwnerBookings");
const getUserBookings = require("../controllers/bookings/getUserBookings");
const getUserTotalBooking = require("../controllers/bookings/getUserTotalBookings");
const saveNewBooking = require("../controllers/bookings/saveNewBooking");
const verifyToken = require("../middlewares/verifyToken");

const router = require("express").Router();

//Get user bookings length
router.get(`/api/bookings/total`, getUserTotalBooking);

//Get user bookings
router.get(`/api/bookings`, verifyToken, getUserBookings);

//Get owner bookings
router.get("/api/ownerBooking", verifyToken, getOwnerBookings);

//Check for duplicates
router.get(`/api/getBooked`, getBooked);

//Save new booking
router.post("/api/bookings", verifyToken, saveNewBooking);

//Delete booking
router.delete("/api/booking", verifyToken, deleteBooking);




module.exports = router;