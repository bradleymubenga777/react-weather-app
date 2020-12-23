import React from 'react'
import '../main.css'
export default function weatherHighlights(props) {

    return (
        <div className="col-lg-8 col-lg-8">
            <div className="container">
                <div className="basicWeather d-flex justify-content-center flex-wrap">
                        <div className="p-3">
                            <p><b>Wind Speed</b>(km/hr)</p>
                            <h2>{props.weather.wind_speed}</h2>
                        </div>

                        <div className="p-3">
                            <p><b>Preassure</b>(millibar)</p>
                            <h2>{props.weather.pressure}</h2>
                        </div>

                        <div className="p-3">
                            <p><b>Precipitation</b>(mm)</p>
                            <h2>{props.weather.precip}</h2>
                        </div>

                        <div className="p-3">
                            <p><b>Humidity</b>(%)</p>
                            <h2>{props.weather.humidity}</h2>
                        </div>
                    </div> 
            </div>           
        </div>
    )
}
