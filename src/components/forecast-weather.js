import React from 'react';


class Forecast extends React.Component {
  render() {


    const forecastItems = this.props.forecast.map((f, i) => {


      const url =`http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`

      let timeStamp = (f.dt*1000);

      let date = new Date(timeStamp);

      return(
        <div className="forecast__item" key={i}>

          <p className="forecast__item-date">{f.dt}</p>

          <img className="forecast__item-img" alt="" src={url}/>
          <p className="forecast__item-temp">{f.main.temp}°</p>
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
