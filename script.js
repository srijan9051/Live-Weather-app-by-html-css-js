const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2480612b0cmsh36951a17ba4e941p1edc33jsnf2e084100795',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityname.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city,options)
	.then(response => response.json())
    .then(response => {
		console.log(response)
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity 
		humidity2.innerHTML = response.humidity 
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_degrees2.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
	   
	})
    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault();
	getWeather(city.value);
})

getWeather("Delhi");

const getWeather2 = (Bangalore)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore',options)
	.then(response => response.json())
    .then(response => {
		console.log(response)
		humidity3.innerHTML = response.humidity 
		max_temp3.innerHTML = response.max_temp
		min_temp3.innerHTML = response.min_temp
		wind_speed3.innerHTML = response.wind_speed
	   
	})
    .catch(err => console.error(err));
}
getWeather2("Bangalore");

const getWeather3 = (Kolkata)=>{
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata',options)
	.then(response => response.json())
    .then(response => {
		console.log(response)
		humidity4.innerHTML = response.humidity 
		max_temp4.innerHTML = response.max_temp
		min_temp4.innerHTML = response.min_temp
		wind_speed4.innerHTML = response.wind_speed
	   
	})
    .catch(err => console.error(err));
}
getWeather3("Kolkata");

const getWeather4 = (Mumbai)=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai',options)
		.then(response => response.json())
		.then(response => {
			console.log(response)
			humidity5.innerHTML = response.humidity 
			max_temp5.innerHTML = response.max_temp
			min_temp5.innerHTML = response.min_temp
			wind_speed5.innerHTML = response.wind_speed
		   
		})
		.catch(err => console.error(err));
	}
	getWeather4("Mumbai");


	const getWeather5 = (Chennai)=>{
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai',options)
			.then(response => response.json())
			.then(response => {
				console.log(response)
				humidity6.innerHTML = response.humidity 
				max_temp6.innerHTML = response.max_temp
				min_temp6.innerHTML = response.min_temp
				wind_speed6.innerHTML = response.wind_speed
			   
			})
			.catch(err => console.error(err));
		}
		getWeather5("Chennai");