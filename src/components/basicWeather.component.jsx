import React from 'react'
import SearchLocation from './searchLocation'
import WeatherHighlights from './weatherHighlights.components'
import '../main.css';
import image from '../img/Shower.png'

export default function BasicWeather(props) {

    const { temperature, description, location, region, country, img } = props.weather;

    return (
        <div className="row">
            <div className="col-lg-4 col-xl-4">
                <div className="basicWeather pt-3 text-center">

                    <div className="pt-5">
                        <div className="pb-3">
                            <img className="mainImg img-fluid" src={image} alt="weather-img" width="115px"/>
                        </div>

                        <div className="">
                            <h1>{temperature}<sup>o</sup>C</h1>
                            <h1>{description}</h1>
                            
                            <h5>{location}</h5>
                            <p>{region} , {country}</p>
                        </div>
                    </div>
                </div>
            </div>

            <WeatherHighlights weather={props.weather}/>
        </div>
    )
}