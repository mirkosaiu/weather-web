import React from "react"
import SunnyIcon from 'WeatherIcons/sunny.svg'
import Clouds from 'WeatherIcons/clouds-1.svg'


const LuminosityLevel = (luminosity, temperature) => {
  var luminosityLevel = <img src={Clouds} className="icon"/>
  if (luminosity > 150 && temperature > 28) luminosityLevel = <img src={SunnyIcon} className="icon"/>
  if (luminosity > 150 ) luminosityLevel = <img src={SunnyIcon} className="icon"/>

  return (
    <div>
      <div></div>
      <div>luminosityLevel</div>
    </div>

  )
}

export default LuminosityLevel
