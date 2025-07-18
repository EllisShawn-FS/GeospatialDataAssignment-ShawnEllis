# GeospatialDataAssignment-ShawnEllis

## weatherRoute.js 🌡️

This fie defines the routes related to weather data functionality. It connects HTTP requests to their corresponding controller methods. 


# Controller Functionality 🎮

## fetchWeather 🛜☁️

This method allows you to fetch real-time weather data from the OpenWeather API based on the latitude and longitude provided by the user. Validation is also added to make sure lat and lon is provided.

## saveWeatherData ✅

This method saves the weather data to the mongo database when provided.

## getAllWeatherData ♾️🌤️

This method retrieves all stored weather data from the mongo database.

## getWeatherDataById 🪪☀️

This method retrieves a single weather data record by it's unique Id given to it by the mongo database. 