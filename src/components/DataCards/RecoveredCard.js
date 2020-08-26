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
    <Card>
      <Card.Body>
        <Card.Title>{country}: <span>
          <CountUp
            prefix='+'
            start={0}
            end={recoveredIncrease}
            duration={2.5}
            separator=','
          />
          </span>
          <i className="fas fa-smile"></i>
        </Card.Title>
        <ChartComponent
          labels={labels}
          values={values}
          label={'Recovered'}
          color={'#92a324'}
        />
        <Card.Text>
          {recovered.toLocaleString()}
          <span className='text-muted' id='update'>{lastUpdated}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecoveredCard;
