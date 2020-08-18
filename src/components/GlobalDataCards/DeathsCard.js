import React from 'react';
import { Card } from 'react-bootstrap';

const DeathsCard = ({ deaths, deathsIncrease }) => (
  <Card className='shadow' id='deaths'>
    <Card.Body>
      <Card.Title>Deaths: <span className='text-danger font-weight-bold'>
          +{deathsIncrease.toLocaleString()}
        </span>
      </Card.Title>
      <Card.Text>
        {deaths.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default DeathsCard;
