import React from 'react';

class CurrentWeather extends React.Component {
  render() {

    const url =`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`

    return (
      <div className="current-weather">
        <div className="currentWeather__content">
          <p className="current-weather__temp">{this.props.currentTemperature}</p>
          <p className="current-weather__description">{this.props.description}</p>
          <img className="current-weather__icon" alt=""
            src={url}
            />
        </div>

        <div>
          <p className="current-weather__feels-like">Feels like {this.props.feelsLike}</p>
        </div>
      </div>
    )
  }
}

export default CurrentWeather;
