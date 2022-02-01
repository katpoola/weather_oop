// Weather object
const weather = new Weather('Tallinn')
// UI object
const ui = new UI()

// get city weather and display it
function getWeather() {
   weather.getWeather()
  .then(data => {
  	ui.drawWeather(data)
  }) 
  .catch(error => console.log(error));
}

getWeather()