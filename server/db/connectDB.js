require("dotenv").config();

const { default: mongoose } = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
        console.log("Successfully connected to the Database")
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = connectDB;


