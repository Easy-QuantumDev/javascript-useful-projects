const city_input = document.getElementById("city-input")

const search_btn = document.getElementById("search-btn")

const error = document.getElementById("error-message")

const city_name_seached = document.getElementById("city-name")

const weather_description = document.getElementById("weather-description")

const temperature = document.getElementById("temperature")

const humidity = document.getElementById("humidity")

const wind = document.getElementById("wind")

const feels_like = document.getElementById("feels-like")

const unit_btn = document.getElementById("unit-btn")






async function SearchWeather() {

    let city = city_input.value.trim()

    if (city === "") {
    
        error.textContent = "please enter a city"
    
        error.style.display = 'block'
    
        return

    
    }

    error.style.display = 'none'

    try {


        const url =
         `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`


        
            const response = await fetch(url)
        
            const data = await response.json()
        
            const latitude = data["results"][0]["latitude"]
        
            const longitude = data["results"][0]["longitude"]

        
            const weather_url =
             `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m`


       
            const weather_response = await fetch(weather_url)
       
            const weather_data = await weather_response.json()

            const temperature = weather_data["current"]["temperature_2m"]
            const humidity = weather_data["current"]["relative_humidity_2m"]
            const feels_like_temp = weather_data["current"]["apparent_temperature"]
            const wind = weather_data["current"]["wind_speed_10m"]



            console.log(weather_data)
  
    }


    catch (err) {
       
        console.log(err)
       
        error.textContent = 'sorry the service is not avalable'
       
        error.style.display = 'block'
    
    }




}


search_btn.addEventListener("click", SearchWeather)
