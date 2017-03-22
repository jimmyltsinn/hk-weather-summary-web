import React from 'react';
import ReactDOM from 'react-dom';
import xhr from 'xhr';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Config from '../config.js';

let url = Config.serverAddress + '/weather/solar-term/19';
xhr(url, (err, res, body) => {
  let raw = JSON.parse(body);

  let data = [];
  data = Object.keys(raw).map(i => {
    raw[i].date = i;

    let cnt = 0;
    raw[i].movingAvg = 0;
    for (let j = -5; j <= 5; ++j) {
      let id = parseInt(i) + j;
      if (id < 0 && id >= raw.length) continue;
      if (!raw[id]) continue;
      raw[i].movingAvg += raw[ id].temp_mean;

      cnt++;
    }
    raw[i].movingAvg /= cnt;

    return raw[i];
  });
  
  // for (let i = 0; i < raw.length; ++i) {
  // // for (let i = 1; i <= 12; ++i) {
  // //   for (let j = 1; j <= 31; ++j) {
  //     // if (!raw[i][j]) continue;
  //     raw[i].id = data.length;
  //     raw[i].date = `${raw.year}`;
  //     data.push(raw[i]);
  // }

  ReactDOM.render(
    <LineChart width={1200} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="30 5"/>
       <Tooltip/>
       <Legend />
         <Line type="monotone" dataKey="movingAvg" stroke="#FF0000" dot={false} />
    </LineChart>
    , document.getElementById('root')
  );
});
