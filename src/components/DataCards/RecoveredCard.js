import React from 'react';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

import ChartComponent from '../Chart/ChartComponent.js';

const RecoveredCard = ({
  country,
  recovered,
  lastUpdated,
  historicalData,
  recoveredIncrease,
  }) => {
  const labels = historicalData && Object.keys(historicalData);
  const values = historicalData && Object.values(historicalData);

  return (
    <Card className='shadow'>
      <Card.Body>
        <Card.Title>{country}: <span className='text-success font-weight-bold'>
          <CountUp
            prefix='+'
            start={0}
            end={recoveredIncrease}
            duration={2.5}
            separator=','
          />
          </span>
        </Card.Title>
        <ChartComponent
          labels={labels}
          values={values}
          label={'Recovered'}
          color={'#228B22'}
        />
        <Card.Text>
          {recovered.toLocaleString()}
          <span id='update'>{lastUpdated}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecoveredCard;
