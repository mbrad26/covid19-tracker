import React from 'react';
import { Card } from 'react-bootstrap';
import CountUp from 'react-countup';

import ChartComponent from '../Chart/ChartComponent.js';

const DeathsCard = ({ deaths, deathsIncrease, historicalData }) => {
  const labels = historicalData && Object.keys(historicalData);
  const values = historicalData && Object.values(historicalData);

  return (
    <Card className='shadow' id='deaths'>
      <Card.Body>
        <Card.Title>Deaths: <span className='text-danger font-weight-bold'>
          <CountUp
            delay={3.5}
            prefix='+'
            start={0}
            end={deathsIncrease}
            duration={2.5}
            separator=','
          />
          </span>
        </Card.Title>
        <ChartComponent
          labels={labels}
          values={values}
          label={'Deaths'}
          color={'red'}
        />
        <Card.Text>
          {deaths.toLocaleString()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DeathsCard;
