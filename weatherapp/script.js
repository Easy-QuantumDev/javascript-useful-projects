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

const forecast = document.getElementById("forecast")

const loading = document.getElementById('loading')








async function SearchWeather() {

    let city = city_input.value.trim()

    if (city === "") {

        error.textContent = "please enter a city"

        error.style.display = 'block'

        return


    }

    error.style.display = 'none'

    try {

        loading.style.display = "block"
        search_btn.disabled = true
        const url =
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`



        const response = await fetch(url)

        const data = await response.json()

        const latitude = data["results"][0]["latitude"]

        const longitude = data["results"][0]["longitude"]


        const weather_url =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`

        const weather_response = await fetch(weather_url)

        const weather_data = await weather_response.json()



        const temperature_value = weather_data["current"]["temperature_2m"]
        const humidity_value = weather_data["current"]["relative_humidity_2m"]
        const feels_like_temp_value = weather_data["current"]["apparent_temperature"]
        const wind_value = weather_data["current"]["wind_speed_10m"]
        const weather_code = weather_data['current']['weather_code']
        const description = getweatherdescription(weather_code)
        const daily = weather_data['daily']





        console.log(weather_data)
        humidity.textContent = `${humidity_value}`
        wind.textContent = `{wind_value} km/h `
        feels_like.textContent = `${feels_like_temp_value}°C `
        temperature.textContent = temperature_value
        city_name_seached.textContent = data['results'][0]['name']
        weather_description.textContent = description
        forecast.innerHTML = ""
        for (let i = 0; i < daily['time'].length; i++) {
            const card = document.createElement("div")
            card.classList.add("forecast-card")
            const date = new Date(daily["time"][i])
            const day = date.toLocaleDateString("en-US", {
                weekday: "short"
            })
            const max_temp = daily["temperature_2m_max"][i]

            const code = daily["weather_code"][i]

            const description = getWeatherDescription(code)
            const icon = getWeatherIcon(code)
            card.innerHTML = `<span>${i === 0 ? "Today" : day}</span>

        <i class="${icon}"></i>
        
        <strong>${Math.round(max_temp)}°</strong>

        <small>${description}</small>
    `
            forecast.appendChild(card)
        }


    }


    catch (err) {

        console.log(err)

        error.textContent = 'sorry the service is not avalable'

        error.style.display = 'block'

    }
    finally{
        loading.style.display = "none"
        search_btn.disabled = false
    }




}


function getweatherdescription(code) {

    if (code === 0) {
        return "Clear Sky ☀️"
    }

    if (code === 1 || code === 2) {
        return "Partly Cloudy 🌤️"
    }

    if (code === 3) {
        return "Overcast ☁️"
    }

    if (code >= 45 && code <= 48) {
        return "Foggy"
    }

    if (code >= 51 && code <= 67) {
        return "Rain 🌧️"
    }

    if (code >= 71 && code <= 77) {
        return "Snow ❄️"
    }

    if (code >= 80 && code <= 82) {
        return "Rain Showers"
    }

    if (code >= 95) {
        return "Thunderstorm ⛈️"
    }

    return "Unknown"
}

function getWeatherIcon(code) {

    if (code === 0) {
        return "fa-solid fa-sun"
    }

    if (code === 1 || code === 2) {
        return "fa-solid fa-cloud-sun"
    }

    if (code === 3) {
        return "fa-solid fa-cloud"
    }

    if (code >= 45 && code <= 48) {
        return "fa-solid fa-smog"
    }

    if (code >= 51 && code <= 67) {
        return "fa-solid fa-cloud-rain"
    }

    if (code >= 71 && code <= 77) {
        return "fa-solid fa-snowflake"
    }

    if (code >= 80 && code <= 82) {
        return "fa-solid fa-cloud-showers-heavy"
    }

    if (code >= 95) {
        return "fa-solid fa-cloud-bolt"
    }

    return "fa-solid fa-cloud"
}

search_btn.addEventListener("click", SearchWeather)
