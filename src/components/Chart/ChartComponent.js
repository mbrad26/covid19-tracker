import React from 'react';
import { Line } from 'react-chartjs-2';

import './ChartComponent.css';
import { chartData } from './utils';

const ChartComponent = ({ labels, values, label, color }) => (
    <Line
      data={chartData(labels, values, label, color)}
      options={{
        maintainAspectRatio: true,
        responsive: true,
      }}
   />
);

export default ChartComponent;
