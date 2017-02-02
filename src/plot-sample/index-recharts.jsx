import React from 'react';
import ReactDOM from 'react-dom';
import xhr from 'xhr';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import Config from './config.js';

let url = Config.serverAddress + '/weather/2012';
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
    <LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="30 5"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="temp_min" stroke="#8884d8" dot={false} />
       <Line type="monotone" dataKey="temp_max" stroke="#82ca9d" dot={false} />
    </LineChart>
    , document.getElementById('root')
  );
});
