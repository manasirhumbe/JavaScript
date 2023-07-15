/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/


/**
 * Retrieve weather data from openweathermap
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '.......................................',   //enter your key here 
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
  };


  return fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, options)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));

}

/**
 * Retrieve city input and get the weather data 
 */
const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  const data = await getWeatherData(city)
  showWeatherData(data)
  // CODE GOES HERE

}

/**
 * Show the weather data in HTML
 */
const showWeatherData = (weatherData) => {

  console.log(weatherData.main.temp)
  //CODE GOES HERE
  document.getElementById('temp').innerText = weatherData.main.temp
  document.getElementById('city-name').innerText = weatherData.name
  document.getElementById('weather-type').innerText = weatherData.weather[0].main
  document.getElementById('min-temp').innerText = weatherData.main.temp_min
  document.getElementById('max-temp').innerText = weatherData.main.temp_max

}

