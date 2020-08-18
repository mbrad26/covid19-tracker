import React from 'react';
import { Card } from 'react-bootstrap';

import ChartComponent from '../Chart/ChartComponent.js';

const RecoveredCard = ({ recovered, recoveredIncrease, historicalData }) => {
  const labels = historicalData && Object.keys(historicalData);
  const values = historicalData && Object.values(historicalData);

  return (
    <Card className='shadow' id='recovered'>
      <Card.Body>
        <Card.Title>Recovered: <span className='text-success font-weight-bold'>
            +{recoveredIncrease.toLocaleString()}
          </span>
        </Card.Title>
        <ChartComponent
          labels={labels}
          values={values}
          label={'Recovered'}
          color={'green'}
        />
        <Card.Text>
          {recovered.toLocaleString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecoveredCard;
