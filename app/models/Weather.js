const mongoose = require('mongoose');

const weatherSchema = new mongoose.Schema({
    location: {
        lat: Number,
        lon: Number,
    },
    temperature: Number,
    weather: String,
});

module.exports = mongoose.model('Weather', weatherSchema);