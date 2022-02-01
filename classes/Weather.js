class Weather{
	constructor(city){
		this.key = '5438e7446241226c8b5e1a045bdc4c4e';
		this.city = city;
	}

	async getWeather(){
		const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		return responceData
	}

	changeCity(city){
		this.city = city;
	}
} 