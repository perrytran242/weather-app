import React from 'react';

import './style.css'
import sunLogo from '../assets/sun.png';
import sunnyLogo from '../assets/sunny.png';
import windyLogo from '../assets/windy.png';

const WeatherDetails = ({ weatherDetails }) => {
    // const weatherTemp = Object.keys(weatherDetails).map( ( key) => {

    //     if ( key === 'main') {
    //         const tempInFahrenheit = Math.round(weatherDetails[key].temp - 273.15) * 9/5 + 32;
    //         return tempInFahrenheit;
    //     }
    // });
    console.log(weatherDetails);

    const getWeatherDetails = weatherDetails.map( (details, index) => {
        return (
            <div key={ index }>
                <h3>{ details.day.substr(0, 3) }</h3>

            </div>
        )
    });

    return (
        <div className="weather-details-container"> 
            <div className="weather-details-header">
                <img className="sun-logo" src={ sunLogo } alt="Sun"/>
                <h2>Weather Details</h2>
            </div>
            <div className="weather-details">
                { getWeatherDetails }
            </div>
            
        </div>
    )
}

export default WeatherDetails;