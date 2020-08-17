import React from 'react';
import { Card } from 'react-bootstrap';

const DeathsCard = ({ deaths, deathsIncrease }) => (
  <Card className='shadow' id='deaths'>
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text className='text-danger font-weight-bold'>
        +{deathsIncrease.toLocaleString()}
      </Card.Text>
      <Card.Text>
        {deaths.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default DeathsCard;
