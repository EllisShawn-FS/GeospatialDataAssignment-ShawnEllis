require('dotenv').config();
const express = require("express");
const app = require("./app");
const connectDB = require("./app/db/config");

connectDB();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server: ${PORT}` )
});