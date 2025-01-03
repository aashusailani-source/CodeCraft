import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import humidity_icon from '../assets/humidity.png';
import drizzle_icon from '../assets/drizzle.png';
import snow_icon from '../assets/snow.png';
import rain_icon from '../assets/rain.png';
import wind_icon from '../assets/wind.png';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

function Weather() {

  const inputRef = useRef();

  const [weather, setWeather] = useState(false);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  }
  const search = async (city) => {
    if(!city) {
      alert("Please enter a city name"); 
      return;
    }
    try{

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${import.meta.env.VITE_API_KEY}`;

      const response = await axios.get(url);
      if(!response.data || response.data.length === 0){
        alert("City not found");
        return;
      }
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;

      const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`;
      const weather_response = await axios.get(weather_url);
      console.log(weather_response.data);
      const icon = allIcons[weather_response.data.weather[0].icon] || clear_icon;
      setWeather({
        humidity: weather_response.data.main.humidity,
        windSpeed: weather_response.data.wind.speed,
        temperature: weather_response.data.main.temp,
        city: weather_response.data.name,
        icon: icon
      });
    } catch(err){
      setWeather(false);
      console.error("Error fetching weather data", err);
    }
  }

  useEffect(() => { 
    search();
    }, []);

  return (
    <div className="mt-16 max-w-lg mx-auto p-6 bg-gray-100 text-gray-900 rounded-lg shadow-lg space-y-6 dark:bg-gray-800 dark:text-gray-100">
      {/* Search Bar */}
      <div className="flex items-center space-x-2 pb-4 border-b border-gray-300 dark:border-gray-600">
        <input
          ref={inputRef}
          type="text"
          className="w-full py-2 px-4 rounded-lg bg-white text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
          placeholder="Enter city"
        />
        <img src={search_icon} onClick={() => search(inputRef.current.value)} alt="Search" className="w-6 h-6" />
      </div>
      {weather? <>
        <div className="text-center space-y-4">
        <img src={weather.icon} alt="Weather Icon" className="w-20 h-20 mx-auto" />
        <p className="text-5xl font-bold">{weather.temperature}°C</p>
        <p className="text-xl font-light">{weather.city}</p>
      </div>

      {/* Additional Weather Details */}
      <div className="flex justify-between text-center text-lg">
        <div className="flex flex-col items-center">
          <img src={humidity_icon} alt="Humidity" className="w-8 h-8 mb-1" />
          <p>{weather.humidity}</p>
          <span className="text-sm font-light">Humidity</span>
        </div>
        <div className="flex flex-col items-center">
          <img src={wind_icon} alt="Wind Speed" className="w-8 h-8 mb-1" />
          <p>{weather.windSpeed} km/h</p>
          <span className="text-sm font-light">Wind Speed</span>
        </div>
      </div>
      </> : <>
        
      </>}

      {/* Weather Information */}

    </div>
  );
}

export default Weather;
