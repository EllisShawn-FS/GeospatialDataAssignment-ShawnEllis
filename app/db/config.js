const mongoose = require("mongoose");

mongoose.set('debug', true);

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connection Successful! ${connection.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection error:", error)
    }
}

module.exports = connectDB;