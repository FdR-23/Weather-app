const APIkey = "e7bf97cc7349fa6877408e171616f985"

import { addCard } from '../store/slices/cardsSlices.js'


function SearchCity(city) {

    return async function (dispatch) {
        const info = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`);
        const result = await info.json();
        if (result.name !== undefined) {
            const city = {
                id: result.id,
                country: result.sys.country,
                name: result.name,
                img: result.weather[0].icon,
                temp: result.main.temp,
                min: result.main.temp_min,
                max: result.main.temp_max,
                wind: result.wind.speed,
                clouds: result.clouds.all,
                weather: result.weather[0].main,
                latitud: result.coord.lat,
                longitud: result.coord.lon,
            }
            return dispatch(addCard(city))
        }else{
           alert("¡The city not found !")
        }

    }
}



    export default SearchCity