import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import WeatherDetails from '../WeatherDetails/WeatherDetails';
import weather from '../api/weather';
import './style.css';


class App extends Component {
    state = {
        weatherInfo: [],
    }

    userLocation = async (location) => {
        console.log(location);

        try {
            const resp = await weather.get(`?q=${location}`);
            this.setState({ weatherInfo: resp.data })
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        return (
            <div className="ui container">
                <h1 className="header">Simple Weather App</h1>
                <SearchBar getUserLocation={this.userLocation} />
                <WeatherDetails weatherDetails={this.state.weatherInfo}/>
            </div>
        )
    }
}

export default App;

