
import React from 'react'
import PollutionLevel from 'Components/PollutionLevel'
import 'Css/MeasurementsPreview.css'

const WeatherRightNow = ({ temperature, luminosity, humidity, pressure, gas }) => {


  return (
    <div className="measurements-preview">
      <div className="measurements-preview-titles">
        <div className="measurements-preview-item-title">Temperature</div>
        <div className="measurements-preview-item-title">Luminosity</div>
        <div className="measurements-preview-item-title">Humidity</div>
        <div className="measurements-preview-item-title">Pressure</div>
        <div className="measurements-preview-item-title">Pollution</div>
      </div>
      <div className="measurements-preview-measures">
        <div className="measurements-preview-item">{temperature} °C</div>
        <div className="measurements-preview-item">{luminosity}</div>
        <div className="measurements-preview-item">{humidity}%</div>
        <div className="measurements-preview-item">{pressure} hPa</div>
        <div className="measurements-preview-item"><PollutionLevel gas={gas}/></div>
      </div>
    </div>
  )
}

export default WeatherRightNow
