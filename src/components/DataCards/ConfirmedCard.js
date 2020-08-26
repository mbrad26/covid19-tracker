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
    <Card>
      <Card.Body>
        <Card.Title>{country}: <span>
          <CountUp
            prefix='+'
            start={0}
            end={casesIncrease}
            duration={2.5}
            separator=','
          />
          </span>
          <i className="fas fa-frown-open"></i>
        </Card.Title>
        <ChartComponent
          labels={labels}
          values={values}
          label={'Cases'}
          color={'#ff7a33'}
        />
        <Card.Text>
          {cases.toLocaleString()}
          <span className='text-muted' id='update'>{lastUpdated}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ConfirmedCard;
