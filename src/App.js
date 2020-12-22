import React from 'react';
import axios from 'axios';
import './main.css';
import DisplayWeather from './components/DisplayWeather'

class App extends React.Component
{  
  state = {
    coords:{
      latitude: 0,
      longitude: 0
    },
    data: {

    }
  }
  componentDidMount()
  {
    //get device loation
    if (navigator.geolocation) //Check if navigation is supported
    {
      navigator.geolocation.getCurrentPosition((position) => {
        let newCoords = 
        {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }

        this.setState({coords: newCoords});

        //API Call
        axios.get(`http://api.weatherstack.com/current?access_key=b9387a127f3551dc85b4cb0ea944d14b&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
          let weatherData =
          {
            location: res.data.location.name,
            country: res.data.location.country,
            region: res.data.location.region,
            cloudCover: res.data.current.cloudcover,
            feelsLike: res.data.current.feelslike,
            temperature: res.data.current.temperature,
            img: res.data.current.weather_code,
            weatherDescription: res.data.current.weather_descriptions[0],
            windSpeed: res.data.current.wind_speed
          }

          this.setState({data: weatherData})
        })
      })
    }

    else
    {

    }
  }

  render()
  {
    return(
      <div className="App">
        <DisplayWeather />
      </div>
    );
  }
}

export default App;
