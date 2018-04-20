import React from "react"
import WeatherStationV1 from "Images/weather_station_v1.jpg"
import "Css/Station.css"



const Statistics = inputs => {
  return (
    <div>
      <h1>The Station</h1>

      <space/>

      <h4>Version 1 (2018)</h4>

      <div className="centered-inline">
        <img src={WeatherStationV1} className="weather-station-v1"/>
      </div>
    </div>
  )
}

export default Statistics
