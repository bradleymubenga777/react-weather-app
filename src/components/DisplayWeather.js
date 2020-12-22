import React from 'react'

export default function DisplayWeather(props) {

    return (
        <div>
            <p>{props.weatherData.location}</p>
        </div>
    )
}
