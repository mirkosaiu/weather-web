import 'Css/chartStyle.css'; // CSS Styles

import React from 'react';
import Highcharts from 'highcharts/js/highcharts'; // Style by CSS import
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Tooltip, Legend, LineSeries
} from 'react-jsx-highcharts';



const MyChart = ({ valuesY, valuesX, yAxisTitle, title, lineSeriesName, valueSuffix }) => {
  return (
    <div>
      <HighchartsChart>

        <Chart />

        <Title>{title}</Title>

        <Subtitle>Source: weather station</Subtitle>

        <Legend layout="vertical" align="right" verticalAlign="middle" borderWidth={0} />

        <Tooltip valueSuffix={valueSuffix} shared />

        <XAxis categories={valuesX}>
          <XAxis.Title>Time</XAxis.Title>
        </XAxis>

        <YAxis id="cities">
          <YAxis.Title>{yAxisTitle}</YAxis.Title>
          <LineSeries id={lineSeriesName} name={lineSeriesName} data={valuesY} />
        </YAxis>

      </HighchartsChart>
    </div>
  )
}

export default withHighcharts(MyChart, Highcharts);
