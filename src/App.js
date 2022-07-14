import logo from './logo.svg';
import './App.css';
import React from 'react';
import './assets/main.scss';
import './assets/forecast.scss';
import './assets/current.scss';



import SearchBar from './components/search-bar';
import CurrentWeather from './components/current-weather';
import Forecast from './components/forecast-weather';

import { getCurrentWeather, getForecast } from './api/open-weather-api.js'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'dallas',
      temp: '',
      feelsLike: '',
      description: '',
      windSpeed: '',
      icon:'',
      forecast: []
    };
  }

  onInputChange(e){
    this.setState({
      location: e.target.value
    })
  };


  onFormSubmit(){

    getCurrentWeather(this.state.location).then((res) => {
      this.setState({
        temp: res.data.main.temp,
        feelsLike: res.data.main.feels_like,
        description: res.data.weather[0].description,
        windSpeed: res.data.wind.speed,
        icon: res.data.weather[0].icon
      });
    });

    getForecast(this.state.location).then((res) => {
      this.setState({
        forecast: res.data.list
      })
    })
  }


  render() {
    return (
      <div className="App">
        <SearchBar
          location={this.state.location}
          inputChange={e => this.onInputChange(e)}
          formSubmitted={() => this.onFormSubmit()}
          />


        <CurrentWeather
          currentTemperature={this.state.temp}
          feelsLike={this.state.feelsLike}
          windSpeed={this.state.windSpeed}
          description={this.state.description}
          icon={this.state.icon}
        />

        <Forecast forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
