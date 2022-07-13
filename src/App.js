import logo from './logo.svg';
import './App.css';
import React from 'react';

import SearchBar from './components/search-bar';
import CurrentWeather from './components/current-weather';
import Forecast from './components/forecast-weather';

import { getCurrentWeather } from './api/open-weather-api.js'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: 'dallas',
      temp: '',
      feelsLike: '',
      description: '',
      icon:''
    };
  }

  onInputChange(e){
    this.setState({
      location: e.target.value
    })
  }

  onFormSubmit(){

    getCurrentWeather(this.state.location).then((res) => {
      this.setState({
        temp: res.data.main.temp,
        feelsLike: res.data.main.feels_like,
        description: res.data.weather[0].description,
        icon: res.data.weather[0].icon
      });
    });
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
          description={this.state.description}
          icon={this.state.icon}
        />

        <Forecast />
      </div>
    );
  }
}

export default App;
