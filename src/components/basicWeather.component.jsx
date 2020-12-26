import React from 'react'
import WeatherHighlights from './weatherHighlights.components'
import '../index.css'

//Import Weather Pictures
import sunny from '../img/Clear.png'
import partlyCloudy from '../img/LightCloud.png'
import cloudy from '../img/HeavyCloud.png'
import rainPossible from '../img/HeavyRain.png'
import snow from '../img/Snow.png'
import thunderStorm from '../img/Thunderstorm.png'

export default function BasicWeather(props) {
    const { temperature, description, location, region, country, weatherCode } = props.weather;
    
    
    //Weather Image Conditionals
    var img = weatherCode;
    
    //Sunny, Clear
    if (weatherCode === 113) 
    {
        img = sunny;
    }

    else if(weatherCode === 116)
    {
        img = partlyCloudy;
    }
    
    else if(weatherCode === 119 || weatherCode === 122 || weatherCode === 143 || weatherCode === 248 || weatherCode === 260 || weatherCode === 182 || weatherCode === 317) 
    {
        img = cloudy;
    }

    //All Types Of Rain
    else if(weatherCode === 176 || weatherCode === 185 || weatherCode === 263 || weatherCode === 266 || weatherCode === 281 || weatherCode === 284 || weatherCode === 293 || weatherCode === 296 || weatherCode === 299 || weatherCode === 302 || weatherCode === 305 || weatherCode === 308 || weatherCode === 311 || weatherCode === 314 || weatherCode === 353 || weatherCode === 356 || weatherCode === 359 ) 
    {
        img = rainPossible;
    }

    //All Types Of Snow
    else if(weatherCode === 179  || weatherCode === 227 || weatherCode === 230 || weatherCode === 320 || weatherCode === 323 || weatherCode === 326 || weatherCode === 329 || weatherCode === 332 || weatherCode === 335 || weatherCode === 338 || weatherCode === 350 || weatherCode === 362 || weatherCode === 365 || weatherCode === 368 || weatherCode === 371 || weatherCode === 374 || weatherCode === 377) 
    {
        img = snow;
    }

    else if(weatherCode === 200 || weatherCode === 386 || weatherCode === 389 || weatherCode === 392 || weatherCode === 395)
    {
        img = thunderStorm;
    }



    return (
        <div className="">
            <div className="">
                <div className="">

                    <div className="">
                        <div className="flex-items">
                            <img className="mainImg img-fluid" src={img} alt="weather-img" width="115px"/>
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

            <WeatherHighlights weather={props.weather} />
        </div>
    )
}