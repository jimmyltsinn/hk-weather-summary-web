import React from 'react';

import {connect} from 'react-redux';
import {} from '../../redux/actions/chart'

import xhr from 'xhr';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import CircularProgress from 'material-ui/CircularProgress';

import Config from '../../config.js';

class Chart extends React.Component {
  constructor() {
    super();
    this.state = {};

    // TODO will move this to redux later
    let url = Config.serverAddress + '/weather/solar-term/19';
    xhr(url, (err, res, body) => {
      let raw = JSON.parse(body);

      let data = [];
      data = Object.keys(raw).map(i => {
        raw[i].date = parseInt(i);

        let cnt = 0;
        raw[i].movingAvg = 0;
        for (let j = -5; j <= 5; ++j) {
          let id = parseInt(i) + j;
          if (id < 0 && id >= raw.length) continue;
          if (!raw[id]) continue;
          raw[i].movingAvg += raw[id].temp_mean;

          cnt++;
        }
        raw[i].movingAvg /= cnt;

        return raw[i];
      });
      this.setState({data: data});
    });
  }


  render() {
    if (!this.state.data) return <CircularProgress />;
    else return (
      <LineChart width={1200} height={300} data={this.state.data}
              margin={{top: 5, right: 30, left: 20, bottom: 5}}>
         <XAxis dataKey="date" type="number" domain={[1900, 2016]} />
         <YAxis domain={[5, 35]}/>
         <CartesianGrid strokeDasharray="30 5"/>
         <Tooltip/>
         <Legend />
           <Line type="monotone" dataKey="movingAvg" stroke="#FF0000" dot={false} />
      </LineChart>
    );
  }
}

Chart.propTypes = {
};

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(Chart);
