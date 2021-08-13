import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY ="8f2035578dcdb592bc2546c52ad02174";

class App extends React.Component{

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async(e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        
        
        if(city){
            const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            const data = await api_url.json();
            
            if(data.cod === '404'){
                this.setState({
                    temp: undefined,
                    city: undefined,
                    country: undefined,
                    sunrise: undefined,
                    sunset: undefined,
                    error: "Please check city spelling"
                });
                return;
            }
            // console.log(data);
            let sunset = data.sys.sunset;
            let date = new Date(sunset*1000);
            // date.setTime(sunset);
            let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

            let sunrise = data.sys.sunrise;
            let dateSunrise = new Date(sunrise*1000);
            let hoursSunrise = dateSunrise.getHours();
            let minSunrice = dateSunrise.getMinutes();
            let secSunrise = dateSunrise.getSeconds();
            let sunrise_date = hoursSunrise + ":" + minSunrice + ":" + secSunrise;

            let tempCel = Math.round(data.main.temp + (-273));
            
            this.setState({
                temp: tempCel,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: undefined
            });
        }else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Please enter your city"
            });
        }
        
    }

    render(){
        return(
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info/>
                            </div>
                            <div className="col-sm-7 form">
                                <Form weatherMethod = {this.gettingWeather}/>
                                <Weather
                                    temp={this.state.temp}
                                    city={this.state.city}
                                    country={this.state.country}
                                    sunrise={this.state.sunrise}
                                    sunset={this.state.sunset}
                                    error={this.state.error} 
                                />
                            </div>
                        </div>
                    </div>
                </div>.
                
            </div>
        );
    }
}

export default App;