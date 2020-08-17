import React from 'react';
import { Line } from 'react-chartjs-2';

import './ChartComponent.css';

const ChartComponent = () => (
  <div className='shadow' id='chart'>
    Chart
    <Line />
  </div>
)

export default ChartComponent;
