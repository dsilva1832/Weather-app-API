async function search(){
const city = document.getElementById('city').value;
console.log(city);
if(city=="" || city==" "){
    alert("Enter a city name")
}else{
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080&units=metric`);
        const data = await response.json();
        getWeather.innerHTML=`
        <div class="row">
            <div class="col-3 text-center">
                <div class="cards text-center text-light d-flex align-items-center justify-content-center flex-column">
                    <h4 id="cards-head">Weather description</h4>
                    <i class="fa-solid fa-cloud"></i>
                    <h6 id="cards-head">${data.weather[0].description}</h6>
                </div>
            </div>
            <div class="col-3 text-center">
                <div class="cards text-center text-light d-flex align-items-center justify-content-center flex-column">
                    <h4 id="cards-head">Temperature</h4>
                    <i class="fas fa-thermometer-half"></i>
                    <h6 id="cards-head">${data.main.temp}°C</h6>
                </div>
            </div>
            <div class="col-3 text-center">
                <div class="cards text-center text-light d-flex align-items-center justify-content-center flex-column">
                    <h4 id="cards-head">Wind speed</h4>
                    <i class="fa-solid fa-wind"></i>
                    <h6 id="cards-head">${data.wind.speed}m/s</h6>
                </div>
            </div>
            <div class="col-3 text-center">
                <div class="cards text-center text-light d-flex align-items-center justify-content-center flex-column">
                    <h4 id="cards-head">Humidity</h4>
                    <i class="fas fa-tint"></i>
                    <h6 id="cards-head">${data.main.humidity}%</h6>
                </div>
            </div>
        </div>`
        } catch (error) {
            alert("City not found")
        }
    }

}