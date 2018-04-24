import 'Css/Home.css'
import React from "react"
import MyChart from 'Components/MyChart'
import { connect } from 'react-redux'
import { fetchMeasurements } from 'Actions'
import FacebookLoader from 'Components/FacebookLoader'
import GenericLoading from 'Components/GenericLoading'
import WeatherRightNow from 'Components/WeatherRightNow'
import ClockIcon from 'Icons/alarm-clock.svg'

const mapStateToProps = state => {
  return { measurements: state.measurements.items}
}

const updateDelayInSecs = 8

class Home extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchMeasurements())
  }

  render() {
    const dispatch = this.props.dispatch
    setTimeout(function() { dispatch(fetchMeasurements()); }, updateDelayInSecs*1000)

    const { measurements } = this.props
    const measurementsForGraph = measurements.sort((m1, m2) => {
      if (m1.date > m2.date) return 1
      if (m1.date < m2.date) return -1
      return 0;
    }).slice(-12)
    const temperatures = measurementsForGraph.map(m => { return m.temperature })
    const luminosity = measurementsForGraph.map(m => { return m.luminosity })
    const humidity = measurementsForGraph.map(m => { return m.humidity })
    const pressure = measurementsForGraph.map(m => { return m.pressure })
    const gas = measurementsForGraph.map(m => { return m.gas })
    const dates = measurementsForGraph.map(m => {
      var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      const date = new Date(m.date).toLocaleDateString("en-US",options)
      return date
    })

    var lastTemperature = 0
    var lastLuminosity = 0
    var lastHumidity = 0
    var lastGas = 0
    var lastPressure = 0
    if(measurements.length > 0) {
      lastTemperature = measurementsForGraph.slice(-1)[0].temperature
      lastLuminosity = measurementsForGraph.slice(-1)[0].luminosity
      lastHumidity = measurementsForGraph.slice(-1)[0].humidity
      lastPressure = measurementsForGraph.slice(-1)[0].pressure
      lastGas = measurementsForGraph.slice(-1)[0].gas
    }


    return (
      <div>
        <div className="centered-inline">
          <img src={ClockIcon} className="icon" />&nbsp;
          Data automatically updates every {updateDelayInSecs} seconds
        </div>

        <div className="space"/>

        <h1>Weather right now</h1>
        <WeatherRightNow temperature={lastTemperature} luminosity={lastLuminosity} humidity={lastHumidity} pressure={lastPressure} gas={lastGas}/>

        <div className="space"/>
        <div className="space"/>


        <h1>Last 12 measurements</h1>

        { !measurements && <GenericLoading/> }
        { !!measurements && <MyChart title="Temperature measurements" valuesY={temperatures} valuesX={dates} yAxisTitle="Temperature (°C)" lineSeriesName="Temp" valueSuffix=" °C"/> }
        { !!measurements && <MyChart title="Luminosity measurements" valuesY={luminosity} valuesX={dates} yAxisTitle="Luminosity" lineSeriesName="Lum" valueSuffix=""/> }
        { !!measurements && <MyChart title="Humidity measurements" valuesY={humidity} valuesX={dates} yAxisTitle="Humidity (%)" lineSeriesName="Hum" valueSuffix=" %"/> }
        { !!measurements && <MyChart title="Pressure measurements" valuesY={pressure} valuesX={dates} yAxisTitle="Pressure (hPa)" lineSeriesName="Pres" valueSuffix=" hPa"/> }
        { !!measurements && <MyChart title="Pollution measurements" valuesY={gas} valuesX={dates} yAxisTitle="Pollution" lineSeriesName="Pol" valueSuffix=""/> }
      </div>
    )
  }
}

export default connect(mapStateToProps)(Home)
