import React, { useState, useEffect } from "react";

import "./App.css";



function App() {
  const [temperature, setTemperature] = useState(null);
  const city = "Dallas"
  const API_KEY = "7374aa5adb246a388fffadddd35d42a1";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTemperature(data.main.temp);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <div>
        <h1>Weather App</h1>
        <p>City: {city}</p>
        <p>Temperature: {temperature}°C</p>
        
      </div>
    </>
  );
}

export default App;
