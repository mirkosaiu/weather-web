
import React from 'react'
import 'Css/MeasurementsPreview.css'

const WeatherRightNow = ({ temperature, luminosity, humidity, pressure, gas }) => {

  var gasLevel = <span className="green-text">Low</span>
  if (gas > 200000 ) gasLevel = <span className="orange-text">Average</span>
  if (gas > 800000 ) gasLevel = <span className="dark-orange-text">High</span>
  if (gas > 1500000 ) gasLevel = <span className="red-text">Very high</span>
  if (gas > 2000000 ) gasLevel = <span className="purple-text">Very dangerous</span>

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
        <div className="measurements-preview-item">{gasLevel}</div>
      </div>
    </div>
  )
}

export default WeatherRightNow
