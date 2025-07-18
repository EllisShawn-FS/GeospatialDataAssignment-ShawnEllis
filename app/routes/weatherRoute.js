const router = require("express").Router();
const {
    fetchWeather,
    saveWeatherData, 
    getAllWeatherData,
    getWeatherById,
} = require("../controllers/weatherController")

router.get('/', fetchWeather);
router.post('/', saveWeatherData);
router.get('/all', getAllWeatherData);
router.get('/:id', getWeatherById);

module.exports = router;