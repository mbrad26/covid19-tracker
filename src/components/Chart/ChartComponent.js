import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';

import './ChartComponent.css';
import { chartData } from './utils';

const ChartComponent = ({ data, loadingData , label, color }) => {
  const labels = data.cases && Object.keys(data.cases)
  const values = data.cases && Object.values(data.cases)

  console.log('CHART: ', data);

  useEffect(() => {
    loadingData();
  }, [loadingData]);

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
