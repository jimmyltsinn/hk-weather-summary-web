import React from 'react';

import {connect} from 'react-redux';
import {LineTypes} from '../../redux/actions/chart';
import {getContentWidth, getContentHeight} from '../../redux/selectors/ui';
import {getYearsData, getSolarTermData} from '../../redux/selectors/data';

import Color from 'color';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from 'recharts';

import {range} from '../../util';

class Chart extends React.Component {
  render() {
    const margin = {
      top: 15,
      right: 30,
      left: -10,
      bottom: 15
    };

    let lines, xAxis;

    switch (this.props.chartOptions.type) {
      case 'BY_SOLARTERM': {
        lines = Object.keys(this.props.chartOptions.solarTerm)
          .filter(term => this.props.chartOptions.solarTerm[term])
          .map(term => Object.keys(this.props.chartOptions.lines)
            .filter(i => this.props.chartOptions.lines[i])
            .map(line => ({
              key: `${term}-${LineTypes[line].id}`,
              name: `${this.props.solarTermName[term]} (${LineTypes[line].shortName})`,
              color: Color.hsl([term / 24 * -360 + 180, LineTypes[line].color.s, LineTypes[line].color.v]).string(),
            })));
        lines = [].concat.apply([], lines);

        xAxis = [{
          type: 'number',
          key: 'year',
          range: this.props.xRange,
          ticks: range(this.props.xRange[0], this.props.xRange[1], 5)
        }];
        break;
      }
      case 'BY_YEAR': {
        lines = Object.keys(this.props.chartOptions.years)
          .filter(i => this.props.chartOptions.years[i])
          .map(i => Object.keys(this.props.chartOptions.lines)
            .filter(i => this.props.chartOptions.lines[i])
            .map(line => ({
              key: `${i}-${LineTypes[line].id}`,
              color: Color.hsl([(i - 1900) / (2016 - 1900) * -240 + 240, LineTypes[line].color.s, LineTypes[line].color.v]).string(),
              name: `${i} (${LineTypes[line].shortName})`
            })));
        lines = [].concat.apply([], lines);
        xAxis = [{
          type: 'category',
          key: 'date',
          range: [],
          ticks: range(1, 12).map(i => `${i}/1`)
        }, {
          type: 'number',
          key: 'number',
          range: [1, 366],
        }];
        break;
      }
      case 'BY_DATE': {
        break;
      }
    }

    return (
      <LineChart
        width={this.props.width}
        height={this.props.height}
        data={this.props.data}
        margin={margin}>
        {xAxis.map((axis, id) => (
          <XAxis
            type={axis.type}
            dataKey={axis.key}
            xAxisId={id}
            key={axis.key}
            domain={axis.range}
            ticks={axis.ticks || null}
            />
        ))}
        <YAxis
          domain={this.props.yAxisScale === 'fixed' ? [0, 40] : ['dataMin - 1', 'dataMax + 1']}
          ticks={range(0, 40, 2)}
          />
        <Tooltip/>
        <Legend />
        <CartesianGrid strokeDasharray="2 2"/>

        {lines.map(l => (
          <Line
            key={l.key}
            type="monotone"
            dataKey={l.key}
            name={l.name}
            stroke={l.color}
            dot={false}
            connectNulls={true}
          />))}
      </LineChart>
    );
  }
}

Chart.propTypes = {
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  chartOptions: React.PropTypes.object.isRequired,
  xRange: React.PropTypes.array.isRequired,
  data: React.PropTypes.array.isRequired,
  solarTermName: React.PropTypes.object,
  yAxisScale: React.PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  width: getContentWidth(state),
  height: getContentHeight(state),
  chartOptions: state.chart,
  xRange: state.chart.type == 'BY_YEAR' ? [1, 366] : [state.chart.yearRange.min, state.chart.yearRange.max],
  data: state.chart.type == 'BY_YEAR' ? getYearsData(state) : state.chart.type == 'BY_SOLARTERM' ? getSolarTermData(state) : state.data.date[state.chart.date.month][state.chart.date.date],
  solarTermName: state.data.solarTerm.map,
  yAxisScale: state.chart.yAxisScale
});

// const mapDispatchToProps = (dispatch) => ({
// });

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Chart);
