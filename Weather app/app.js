document.addEventListener('DOMContentLoaded',function(){
const weatherForm= document.getElementById('weatherForm');
const cityInput=document.getElementById('cityInput');
const weatherInfo=document.getElementById('weatherInfo');

weatherForm.addEventListener('submit',function(e){
    e.preventDefault();

    const city= cityInput.value;
    getWeatherData(city);
});


async function getWeatherData(city){
    const apiKey='d5416b7240daa052345963ca4da37771';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response=await fetch(apiUrl);
        const data= await response.json();

        if(response.ok){
            const temperature=data.main.temp;
            const description = data.weather[0].description;
            const cityDisplay=data.name;

            const weatherText = `${cityDisplay}: ${temperature}°C, ${description}`;
                weatherInfo.textContent = weatherText;
        } else {
            // Handle non-OK response (e.g., city not found)
            weatherInfo.textContent = 'City not found. Please try again.';
        }
    } catch (error) {
        console.error('Error fetching weather data: ',error);
    }





}




});