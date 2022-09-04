import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';
import Search from "./Search";
import "./Forecast.css";

export default function Forecast() {
  let weatherData = {
    city: "Kyiv",
    date: "Friday 11:00",
    temp: "19",
    
    description: "Cloudy",
    
  };
  return (
    <div className="container">
      <div className="weather">
        <div className="row">
                  <div className="col-6">
                      
            
  <ReactAnimatedWeather
                          icon="CLEAR_DAY"
                          color="goldenrod"
                          size={120}
                          animate={true}
  />


            <h1>{weatherData.city}</h1>
            <h2>{weatherData.date}</h2>
            <h3>{weatherData.temp}°C|F</h3>
            <p>{weatherData.description}</p>
          </div>
          <div className="col-6">
            <div className="city" id="newCity"></div>
          <Search />
            
            <div className="add">
              
              <div className="description"></div>
            </div>
          </div>
        </div>
        <div className="row weather-icons"></div>
      </div>
    </div>
  );
}
