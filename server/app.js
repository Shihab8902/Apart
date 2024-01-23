const express = require("express");
const app = express();
const cors = require("cors");
const useRoutes = require("./routes");


//Middlewares
app.use(cors());
app.use(express.json());


//Use all routes
useRoutes(app);   //From routes index.js




//Home route
app.get("/", (req, res) => {
    res.json({ message: "The server is up and running...." })
});


module.exports = app;