import React from 'react';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

import ChartComponent from '../Chart/ChartComponent.js';

const ConfirmedCard = ({
  cases,
  country,
  lastUpdated,
  casesIncrease,
  historicalData
  }) => {
  const labels = historicalData && Object.keys(historicalData);
  const values = historicalData && Object.values(historicalData);

  return (
    <Card className='shadow'>
      <Card.Body>
        <Card.Title>{country}: <span className='text-warning font-weight-bold'>
          <CountUp
            prefix='+'
            start={0}
            end={casesIncrease}
            duration={2.5}
            separator=','
          />
          </span>
          <i class="fas fa-frown-open"></i>
        </Card.Title>
        <ChartComponent
          labels={labels}
          values={values}
          label={'Cases'}
          color={'#FF7A33'}
        />
        <Card.Text>
          {cases.toLocaleString()}
          <span id='update'>{lastUpdated}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ConfirmedCard;
