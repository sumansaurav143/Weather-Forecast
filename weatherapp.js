// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// API Key-  71fc67b7e50bd01ec606ca7da9277713

const WeatherApi = {
    key: "71fc67b7e50bd01ec606ca7da9277713",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

const SearchBox = document.getElementById("input-box");
SearchBox.addEventListener('keypress',(event)=>{

    if(event.keyCode == 13){
        console.log(SearchBox.value);
        GetWeatherReport(SearchBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }
    
});

function GetWeatherReport(city){
    fetch(`${WeatherApi.baseUrl}?q=${city}&appid=${WeatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(ShowWeatherReport);
}

function ShowWeatherReport(weather){
    console.log(weather);

    let City = document.getElementById('city');
    City.innerText = `${weather.name},${weather.sys.country}`;

    let Temprature = document.getElementById('temp');
    Temprature.innerHTML =`${Math.round(weather.main.temp)}&deg;C`;

    let MinMax = document.getElementById('min-max');
    MinMax.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.floor(weather.main.temp_max)}&deg;C (max)`;

    let WeatherType = document.getElementById('weather');
    WeatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let TodayDate = new Date();
    date.innerText = dateManage(TodayDate);

    if(WeatherType.textContent == 'Clear'){
        document.body.style.backgroundImage = "url('ClearWeather.jpg')";
    }
    else if(WeatherType.textContent == 'Clouds'){
        document.body.style.backgroundImage = "url('CloudyWeather.jpg')";
    }
    else if(WeatherType.textContent == 'Haze'){
        document.body.style.backgroundImage = "url('HazeWeather.jpg')";
    }
    else if(WeatherType.textContent == 'Rainy'){
        document.body.style.backgroundImage = "url('RainyWeather.jpg')";
    }
    else if(WeatherType.textContent == 'Smoke'){
        document.body.style.backgroundImage = "url('SmokeWeather.jpg')";
    }
    else if(WeatherType.textContent == 'Mist'){
        document.body.style.backgroundImage = "url('SmokeWeather.jpg')";
    }
    else if(WeatherType.textContent == 'Thunderstorm'){
        document.body.style.backgroundImage = "url('ThunderWeather.jpg')";
    }
    else if(WeatherType.textContent == 'Snow'){
        document.body.style.backgroundImage = "url('SnowWeather.jpg')";
    }
}

function dateManage(dateArg) {
    let Days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
    
    let Months =["January","February","March","April","May","June","July","August","September","October","December"];

    let year = dateArg.getFullYear();
    let month = Months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = Days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}