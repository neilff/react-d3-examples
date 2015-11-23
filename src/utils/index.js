import d3 from 'd3';

const convertValue = (value) => (value / 100) * 2 * Math.PI;

const calculateDonutArc = (width, radius) => {
  return d3.svg.arc()
    .outerRadius(width / 2)
    .innerRadius((width / 2) - radius)
    .startAngle(0);
};

export default {
  convertValue,
  calculateDonutArc,
};
