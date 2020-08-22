import React from 'react';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

import ChartComponent from '../Chart/ChartComponent.js';

const ConfirmedCard = ({ cases, casesIncrease, historicalData }) => {
  const labels = historicalData && Object.keys(historicalData);
  const values = historicalData && Object.values(historicalData);

  return (
    <Card className='shadow' id='cases'>
      <Card.Body>
        <Card.Title>Confirmed: <span className='text-warning font-weight-bold'>
          <CountUp
            delay={3.5}
            prefix='+'
            start={0}
            end={casesIncrease}
            duration={2.5}
            separator=','
          />
          </span>
        </Card.Title>
        <ChartComponent
          labels={labels}
          values={values}
          label={'Cases'}
          color={'orange'}
        />
        <Card.Text>
          {cases.toLocaleString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ConfirmedCard;
