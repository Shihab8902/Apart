const login = require("../controllers/authentication/login");
const register = require("../controllers/authentication/register");
const router = require("express").Router();

router.post("/api/register", register);
router.post("/api/login", login);


module.exports = router;