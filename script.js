async function search(){
    try {
        const city = document.getElementById('city').value;
        console.log(city);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080&units=metric`);
        const data = await response.json();
        getWeather.innerHTML=`
        <div class="row">
                    <div class="col-3 text-center">
                        <div class="cards text-center">
                            <h4>Weather description</h4>
                            <h6>${data.weather[0].description}</h6>
                        </div>
                    </div>
                    <div class="col-3 text-center">
                         <div class="cards text-center">
                            <h4>Temperature</h4>
                            <h6>${data.main.temp}</h6>
                        </div>
                    </div>
                    <div class="col-3 text-center">
                         <div class="cards text-center">
                            <h4>Wind speed</h4>
                            <h6>${data.wind.speed}</h6>
                        </div>
                    </div>
                    <div class="col-3 text-center">
                         <div class="cards text-center">
                            <h4>Humidity</h4>
                            <h6>${data.main.humidity}</h6>
                        </div>
                    </div>
                </div>`
    } catch (error) {
        alert("City not found")
        
    }
    
}