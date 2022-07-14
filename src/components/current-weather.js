import React from 'react';

class CurrentWeather extends React.Component {
  render() {

    const url =`http://openweathermap.org/img/wn/${this.props.icon}@2x.png`;

    const objToday = new Date(),
    	weekday = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'),
    	dayOfWeek = weekday[objToday.getDay()],
    	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
    	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
    	months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'),
    	curMonth = months[objToday.getMonth()],
    	curYear = objToday.getFullYear();

    var today = dayOfWeek + ", " + curMonth + " " + dayOfMonth  + ", " + curYear;

    return (


      <div className="current-weather">
        <div className="static-date">

          <div className="static-date__location-container">
            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M6.00002 7.304C6.33603 7.304 6.64802 7.22 6.93602 7.052C7.22403 6.884 7.45202 6.659 7.62002 6.377C7.78802 6.095 7.87202 5.786 7.87202 5.45C7.87202 5.114 7.78802 4.802 7.62002 4.514C7.45202 4.226 7.22403 3.998 6.93602 3.83C6.64802 3.662 6.33603 3.578 6.00002 3.578C5.66402 3.578 5.35503 3.662 5.07302 3.83C4.79102 3.998 4.56602 4.226 4.39802 4.514C4.23002 4.802 4.14602 5.114 4.14602 5.45C4.14602 5.966 4.32602 6.404 4.68602 6.764C5.04603 7.124 5.48402 7.304 6.00002 7.304ZM6.00002 0.211998C6.96003 0.211998 7.84202 0.445996 8.64602 0.913998C9.43803 1.382 10.068 2.01199 10.536 2.804C11.004 3.608 11.238 4.48999 11.238 5.45C11.238 6.182 11.058 7.02199 10.698 7.97C10.386 8.774 9.95403 9.64399 9.40202 10.58C8.94602 11.324 8.42403 12.098 7.83602 12.902C7.42802 13.466 6.99603 14.018 6.54002 14.558L6.00002 15.188L5.46002 14.558C5.00402 14.018 4.57203 13.466 4.16402 12.902C3.57602 12.098 3.05403 11.324 2.59802 10.58C2.04602 9.64399 1.61403 8.774 1.30202 7.97C0.942022 7.02199 0.762024 6.182 0.762024 5.45C0.762024 4.48999 0.996022 3.608 1.46402 2.804C1.93203 2.01199 2.56202 1.382 3.35402 0.913998C4.15803 0.445996 5.04002 0.211998 6.00002 0.211998Z" fill="white"/>
            </svg>

            <p className="static-date__location">Dallas, TX</p>
          </div>
          <p className="static-date__date">{today}</p>
        </div>

        <div className="current-weather__app">
          <div className="current-weather__content">
            <p className="current-weather__temp">{this.props.currentTemperature}°</p>
            <img className="current-weather__icon" alt="" src={url} />

            <div className="current-weather__description">
              <p className="current-weather__overcast">{this.props.description}</p>
              <p className="current-weather__windspeed">{this.props.windSpeed}</p></div>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentWeather;
