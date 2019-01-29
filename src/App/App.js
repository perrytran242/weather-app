import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';

import weather from '../api/weather'


class App extends Component {
    state = {
        weatherInfo: [],
    }

    userLocation = async (location) => {
        console.log(location);

        try {
            const resp = await weather.get(`?q=${location}`);
            this.setState({ weatherInfo: resp.data.weather })
        } catch (err) {
            console.log(err);
        }
    }


    render() {
        console.log(this.state.weatherInfo);
        return (
            <div className="ui container">
                <h1>Simple Weather App</h1>
                <SearchBar getUserLocation={this.userLocation} />
            </div>
        )
    }
}

export default App;

