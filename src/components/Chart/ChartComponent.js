import React from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';

import './ChartComponent.css';

const ChartComponent = () => {
  const data = useSelector(state => state.globalDataState);
  console.log('CHART DATA: ', data);

  return (
    <div className='shadow' id='chart'>
      Chart
      <Line
        data={data}
        // width={100}
        // height={50}
        options={{ maintainAspectRatio: true }}
      />
    </div>
  )
}

export default ChartComponent;
