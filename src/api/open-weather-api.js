import axios from 'axios';

const API_KEY = '9457189fec162da00b2e4db32a6989c3';

function getCurrentWeather(location){
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`
  );
}

function getForecast(location){
  return axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&cnt=5&appid=${API_KEY}`
  )
}

//change the unit to metric, make it a variable, like parsing location and unit
// function getCurrentWeather(location){
//   //for real time weather
//   return axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=METRIC&appid=${API_KEY}`
//   );
// }

// function getDailyWeather(location){
//   //for real time weather
//   axios.get(
//     `https://api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt={5}&appid=${API_KEY}`
//   )
// }


//FIVE DAY 3 HOUR FORECAST data
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

// api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=5&appid=${API_KEY}


export {
  getCurrentWeather,
  getForecast
}
