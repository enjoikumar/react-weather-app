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

          <div className="clouds">
            <div className="left-cloud">
              <svg width="146" height="84" viewBox="0 0 146 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.887835" fillRule="evenodd" clipRule="evenodd" d="M78.2546 83.2961C97.7029 85.684 115.655 75.9891 123.55 60.4312C124.446 60.6835 125.375 60.8715 126.332 60.9889C135.924 62.1668 144.601 55.7894 145.712 46.7446C146.822 37.6998 139.946 29.4127 130.353 28.2349C128.526 28.0105 126.732 28.0603 125.017 28.3504C119.378 14.0494 105.589 3.02895 88.3698 0.91474C68.65 -1.50654 50.4688 8.49473 42.7501 24.4344C39.0223 21.4879 34.3969 19.4755 29.2442 18.8428C14.9918 17.0928 2.10117 26.5614 0.452163 39.9916C-1.19685 53.4217 9.02019 65.7276 23.2726 67.4775C26.8037 67.9111 30.2513 67.656 33.465 66.8227C35.1071 73.4241 40.9579 78.7166 48.4782 79.64C52.727 80.1617 56.7962 79.2013 60.1078 77.1834C65.4636 80.3337 71.6032 82.4794 78.2546 83.2961Z" fill="white"/>
              </svg>
            </div>


            <div className="right-cloud">
              <svg width="208" height="114" viewBox="0 0 208 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.887835" fillRule="evenodd" clipRule="evenodd" d="M40.7655 32.6345C51.7239 12.6389 76.1028 -0.564132 103.671 0.880684C127.443 2.12652 147.718 13.9558 158.499 30.6743C163.061 29.2043 168.058 28.5171 173.261 28.7898C193.267 29.8382 208.751 44.6794 207.847 61.9384C206.942 79.1974 189.991 92.3387 169.986 91.2903C165.199 91.0394 160.671 89.999 156.565 88.3249C144.293 104.7 122.288 115.011 97.7575 113.726C78.7103 112.728 61.9083 104.935 50.4361 93.2766C47.6099 95.5751 43.9455 96.8746 40.0093 96.6683C32.0522 96.2513 25.8428 89.8309 25.5975 82.0591C10.9839 79.3201 0.298868 68.1696 0.966209 55.436C1.70694 41.302 16.1536 30.5698 33.2337 31.465C35.8461 31.6019 38.3688 32.0029 40.7655 32.6345Z" fill="white"/>
              </svg>
            </div>


          </div>



        </div>
      </div>
    )
  }
}

export default CurrentWeather;
