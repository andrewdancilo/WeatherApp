
import './App.css';


// frontend/src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
    const [weather, setWeather] = useState(null);

    const fetchWeather = async (city) => {
        try {
            const response = await axios.get('http://localhost:5000/api/weather', {
                params: { city },
            });
            setWeather(response.data);
        } catch (error) {
            console.error('Error fetching weather:', error);
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <SearchForm onSearch={fetchWeather} />
            <WeatherDisplay weather={weather} />
        </div>
    );
};

export default App;
