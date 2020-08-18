import React from 'react';
import { Line } from 'react-chartjs-2';

import './ChartComponent.css';
import { chartData } from './utils';

const ChartComponent = ({ labels, values, label, color }) => {
  // const labels = data.cases && Object.keys(data.cases)
  // const values = data.cases && Object.values(data.cases)

  // console.log('CHART: ');

  // useEffect(() => {
  //   loadingData();
  // }, [loadingData]);

  return (
      <Line
        data={chartData(labels, values, label, color)}
        options={{
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
  );
};

export default ChartComponent;
