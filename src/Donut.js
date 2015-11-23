import React from 'react';
import d3 from 'd3';

const defaultColors = d3.scale.category10();

import { Chart } from './common';

const Donut = (props) => {
  const {
    values = [],
    width = 300,
    radius = 25,
    colors,
  } = props;

  const arc = d3.svg.arc()
    .outerRadius(width / 2)
    .innerRadius((width / 2) - radius);

  const pie = d3.layout.pie();

  return (
    <Chart width={ width } height={ width }>
      {
        pie(values).map((i, idx) => {
          const color = colors && colors[idx] ? colors[idx] : defaultColors(idx);

          return (
            <g className="arc" key={ idx }>
              <path d={ arc(i) } fill={ color }></path>
            </g>
          );
        })
      }
    </Chart>
  );
};

export default Donut;
