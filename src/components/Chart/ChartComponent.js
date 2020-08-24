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
        layout: {
          padding: {
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
          }
        },
        scales: {
          xAxes: [{
              ticks: {
                fontSize: 8
              },
              gridLines: {
                  display: false,
              }
          }],
          yAxes: [{
              ticks: {
                fontSize: 10
              },
          }],
        }
      }}
   />
);

export default ChartComponent;
