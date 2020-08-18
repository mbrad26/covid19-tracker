import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import './ChartComponent.css';

const ChartComponent = () => {
  const [data, setData] = useState();
  const data1 = {
    "7/18/20": 14292942,
    "7/19/20": 14507589,
    "7/20/20": 14714367,
    "7/21/20": 14947990,
    "7/22/20": 15228469,
    "7/23/20": 15511225,
    "7/24/20": 15792390,
    "7/25/20": 16047935,
    "7/26/20": 16261215,
    "7/27/20": 16487669,
    "7/28/20": 16740006,
    "7/29/20": 17029155,
    "7/30/20": 17309805,
    "7/31/20": 17599905,
    "8/1/20": 17850617,
    "8/2/20": 18079723,
    "8/3/20": 18282208,
    "8/4/20": 18540789,
    "8/5/20": 18811953,
    "8/6/20": 19097149,
    "8/7/20": 19378036,
    "8/8/20": 19637506,
    "8/9/20": 19861683,
    "8/10/20": 20089624,
    "8/11/20": 20344188,
    "8/12/20": 20621140,
    "8/13/20": 20907124,
    "8/14/20": 21162496,
    "8/15/20": 21459699,
    "8/16/20": 21672186
  };

  const data2 = {
    "7/18/20": 2009,
    "7/19/20": 2026,
    "7/20/20": 2038,
    "7/21/20": 2074,
    "7/22/20": 2101,
    "7/23/20": 2126,
    "7/24/20": 2150,
    "7/25/20": 2165,
    "7/26/20": 2187,
    "7/27/20": 2206,
    "7/28/20": 2239,
    "7/29/20": 2269,
    "7/30/20": 2304,
    "7/31/20": 2343,
    "8/1/20": 2379,
    "8/2/20": 2413,
    "8/3/20": 2432,
    "8/4/20": 2480,
    "8/5/20": 2521,
    "8/6/20": 2566,
    "8/7/20": 2616,
    "8/8/20": 2659,
    "8/9/20": 2700,
    "8/10/20": 2729,
    "8/11/20": 2764,
    "8/12/20": 2807,
    "8/13/20": 2860,
    "8/14/20": 2904,
    "8/15/20": 2954,
    "8/16/20": 2991,
  }

  console.log('CHART DATA: ', data);

  const chart = () => {
    setData({
      labels: Object.keys(data1),
      datasets: [
        {
          label: 'Cases',
          data: Object.values(data1),
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
        {
          label: 'Deaths',
          data: Object.values(data2),
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'red',
          borderColor: 'red',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'red',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'red',
          pointHoverBorderColor: 'red',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          order: 1,
        }
      ]
    })
  }

  useEffect(() => {
    chart();
  }, []);

  return (
    <div className='shadow' id='chart'>
      Chart
      <Line
        data={data}
        // width={400}
        // height={150}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  )
}

export default ChartComponent;
