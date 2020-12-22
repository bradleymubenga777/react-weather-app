import React from 'react';
import axios from 'axios';
import './main.css';

class App extends React.Component
{  
  state = {
    coords: {
      latitude: null,
      longitude: null
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
          longitude: position.coords.latitude
        }

        this.setState({coords: newCoords});

        //API Call
        axios.get(`http://api.weatherstack.com/current?access_key=b9387a127f3551dc85b4cb0ea944d14bY&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res => {
          console.log(res);
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
  
      </div>
    );
  }
}

export default App;
