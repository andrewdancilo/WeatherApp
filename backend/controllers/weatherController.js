const axios = require('axios');

// Define the controller function to fetch weather data
exports.getWeather = async (req, res) => {
    const { city } = req.query;

    // Check if the city parameter was passed
    if (!city) {
        return res.status(400).json({ error: 'City is required' });
    }

    try {
        // Retrieve the API key from the .env file
        const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
        return res.status(500).json({ error: 'API key is missing' });
    }

        // Make a GET request to the OpenWeather API
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        // Send the weather data in the response
        res.json(response.data);
    } catch (error) {
        // Handle errors, such as network issues or invalid API key
        console.error(error);
        res.status(500).json({ error: 'Unable to fetch weather data' });
    }
};
