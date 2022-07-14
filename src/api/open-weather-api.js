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


export {
  getCurrentWeather,
  getForecast
}
