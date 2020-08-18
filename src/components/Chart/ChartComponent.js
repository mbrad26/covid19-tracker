import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';

import './ChartComponent.css';

const ChartComponent = ({ data, loadingData }) => {
  // const [data, setData] = useState({});
  const labels = data.cases && Object.keys(data.cases)
  const newData = data.cases && Object.values(data.cases)
  console.log('CHART: ', data);

  // console.log('HISTORICAL DATA: ', data && Object.values(data.cases));

  const chart = {
      labels: labels,
      datasets: [
        {
          label: 'Cases',
          data: newData,
          lineTension: 0.1,
          backgroundColor: 'orange',
          borderColor: 'orange',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'orange',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'orange',
          pointHoverBorderColor: 'orange',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          order: 1,
        },
      ]
    }


  useEffect(() => {
    loadingData();
  }, []);

  return (
      <Line
        data={chart}
        // width={400}
        // height={150}
        options={{
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
  )
}

export default ChartComponent;
