import React, { Component } from 'react';
import './App.css';
import Title from './Component/Title';
import Form from './Component/Form'
import Weather from './Component/Weather'

const API_KEY = "fcba6cf7eb7663d051c003b64147f33c"; // API KEY FROM OPENWEATHER SITE

class App extends Component {
  getWeather = async () => {
    const api_call = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=Montreal&mode=json&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();  //CONVERSTION OF DATA INTO READABLE JSON FORMAT
    console.log(data);
  }
  render() {
    return (
      <div className="App">
      <h1>Hello</h1>
      <Title/>
      <Form/>
      <Weather/>
      </div>
    );
  }
}

export default App;
