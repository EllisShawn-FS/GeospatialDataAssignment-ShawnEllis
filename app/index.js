const express = require("express");
const app = express();
const routeHandler = require("./routes");

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "API is active", success: true })
});

const weatherRoutes = require("./routes/weatherRoute")
app.use('/api/v2/weather', weatherRoutes)

app.use("/api/v2", routeHandler);

module.exports = app;