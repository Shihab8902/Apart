require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (req, res) => {
    const email = req.body;
    const token = jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: "72h" });
    res.send({ token });

}

module.exports = generateToken;