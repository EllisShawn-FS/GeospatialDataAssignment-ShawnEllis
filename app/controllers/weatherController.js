const Weather = require("../models/Weather");
const fetch = require('node-fetch');

const apiKey = process.env.WEATHER_API_KEY;

// GET
fetchWeather = async (req, res) => {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
        return res.status(400).json({ error: "Latitude and longitude are required!" });
    }

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (!response.ok || !data.main || !data.weather) {
            console.error("OpenWeather API error:", data);
            return res.status(response.status).json({ error: data.message || "Failed to fetch weather data" });
        }

        const weatherDataFixed = {
            location: { lat: Number(lat), lon: Number(lon) },
            temperature: data.main.temp,
            weather: data.weather[0].main,
        };

        res.status(200).json({ success: true, data: weatherDataFixed });
    } catch (err) {
        console.error("Fetch error:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

//POST
saveWeatherData = async (req, res) => {
    try {
        const weatherData = await Weather.create(req.body);
        res.status(201).json({ success: true, id: weatherData._id });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};

//GET ALL STORED WEATHER DATA 
getAllWeatherData = async (req, res) => {
    try {
        const data = await Weather.find();
        res.status(200).json({ success: true, data});
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

//GET WEATHER BY ID
getWeatherById = async (req, res) => {
    try {
        const weatherData = await Weather.findById(req.params.id);

        if (!weatherData){
            res.status(404).json({ error: "Weather Id not found"})
        }
        res.status(200).json({ success: true, data: weatherData});
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
};


module.exports = {
    fetchWeather,
    saveWeatherData, 
    getAllWeatherData,
    getWeatherById,
}

