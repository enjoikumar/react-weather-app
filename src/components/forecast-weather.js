import React from 'react';


class Forecast extends React.Component {
  render() {

    const forecastItems = this.props.forecast.map((f, i) => {

      const url =`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`

      return(
        <div className="forecast__item" key={i}>
          <p>temperature: {f.main.temp}</p>
          <img className="" alt="" src={url}/>
          <p>day of the week {f.dt_txt}</p>
          <p>date {f.dt}</p>
        </div>
      )
    });



    return(
      <div className="forecast">
        {forecastItems}
      </div>
    )
  }
}

export default Forecast;


// return(
//   <div className="forecast__item">
//     <p>temperature: {f.main.temp}</p>
//     <p>icon {f.weather[0].icon}</p>
//     <p>day of the week {f.weather.dt_txt}</p>
//     <p>date {f.weather.dt}</p>
//   </div>
// )
