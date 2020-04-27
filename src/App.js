import React, { Component } from 'react';
import './Styles/App.css';
import Heading from "./Components/Heading";
import Form from "./Components/Form";
import Forecast from "./Components/Forecast";

const api_key = "0ef181ee838ec666086a46756df9018e";


class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    icon: "",
    description: "",
    error: ""
  }

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=imperial&appid=${api_key}`);
  console.log (api_call);
    const response = await api_call.json();
    console.log(response);
    if(city && country){
      this.setState({
        temperature: Math.floor(response.main.temp),
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: ""
      })
    }else{
      this.setState({
        error: "Please fill out input fields..."
      })
    }
  }

 
  render() {
    return (
      <div className="container">
        <div className="header">
          <Heading/>
        </div>
        <div className="form">
          <Form loadWeather={this.getWeather} />
      </div>
      <div className="weather">
    <Forecast
    temperature= {this.state.temperature} 
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    pressure={this.state.pressure}
    icon={this.state.icon}
    description={this.state.description}
    error={this.state.error}/>
    </div>
    </div>
    )
  }
}




export default App;
