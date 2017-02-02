import React from 'react';
import ReactDOM from 'react-dom';
let Chart = require('react-d3-core').Chart;
let LineChart = require('react-d3-basic').LineChart;
// import { Chart } from 'react-d3-core';
// import { LineChart } from 'react-d3-basic';
import Config from './config.js';
import xhr from 'xhr';

let chartSetting = {
  width: 500,
  height: 400,
  margins: {
    left: 25,
    right: 25,
    top: 25,
    bottom: 25
  },
  title: 'Test title',
  series: [
    {
      field: 'temp_mean',
      name: 'Avg.Temp',
      color: '#ff7f0e'
    },
    {
      field: 'temp_min',
      name: 'Min.Temp',
      color: '#0000FF'
    },
    {
      field: 'temp_max',
      name: 'Max.Temp',
      color: '#FF0000'
    }
  ],
  x: d => d.id
};


let url = Config.serverAddress + '/weather/2016';
xhr(url, (err, res, body) => {
  let raw = JSON.parse(body);

  let data = [];
  for (let i = 1; i <= 12; ++i) {
    for (let j = 1; j <= 31; ++j) {
      if (!raw[i][j]) continue;
      raw[i][j].id = data.length;
      raw[i][j].date = `${i}/${j}`;
      data.push(raw[i][j]);
    }
  }

  ReactDOM.render(
    // <Chart
    //   title={chartSetting.title}
    //   width={chartSetting.width}
    //   height={chartSetting.height}
    //   margins={chartSetting.margins}
    //   >
      <LineChart
        margins={chartSetting.margins}
        title={chartSetting.title}
        width={chartSetting.width}
        height={chartSetting.height}
        chartSeries={chartSetting.series}
        data={data}
        x={chartSetting.x}
        />
    // </Chart>
    // <h1>Hello, world!</h1>,
    , document.getElementById('root')
  );

});
