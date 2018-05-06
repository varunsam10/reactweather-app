import React, { Component } from 'react';
import './App.css';
import Title from './Component/Title';
import Form from './Component/Form'
import Weather from './Component/Weather'

const API_KEY = "fcba6cf7eb7663d051c003b64147f33c"; // API KEY FROM OPENWEATHER SITE

class App extends Component {
  state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      description: undefined,
      error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();  //Prevents the full refresh of the Site 
    const city = e.target.elements.City.value;           //Binding the value which we enter in the text box
    const country = e.target.elements.Country.value;     //Binding the value which we enter in the text box
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();  //CONVERSTION OF DATA INTO READABLE JSON FORMAT

   if (city && country){
    console.log(data);
    this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      description:data.weather[0].description,
      //error:"undefined"
    });
   }
   else{
    this.setState({
      temperature:undefined,
      city:undefined,
      country:undefined,
      description:undefined,
      error:"Please Enter the Values"
    });
   }
  }
  render() {
    return (
      <div>
        <Title/>
      <Form getWeather ={this.getWeather}/>
      <Weather
        temperature={this.state.temperature}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description}
        error={this.state.error}
      />

      </div>
    );
  }
}


export default App;
