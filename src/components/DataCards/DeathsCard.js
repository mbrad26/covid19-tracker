import React from 'react';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

import ChartComponent from '../Chart/ChartComponent.js';

const DeathsCard = ({
  deaths,
  country,
  lastUpdated,
  deathsIncrease,
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
            end={deathsIncrease}
            duration={2.5}
            separator=','
          />
          </span>
          <i className="fas fa-skull-crossbones"></i>
        </Card.Title>
        <ChartComponent
          labels={labels}
          values={values}
          label={'Deaths'}
          color={'#bd0026'}
        />
        <Card.Text>
          {deaths.toLocaleString()}
          <span className='text-muted' id='update'>{lastUpdated}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DeathsCard;
