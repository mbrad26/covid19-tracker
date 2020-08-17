import React from 'react';
import { Card } from 'react-bootstrap';

const RecoveredCard = ({ recovered, recoveredIncrease }) => (
  <Card className='shadow' id='recovered'>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text className='text-success font-weight-bold'>
        +{recoveredIncrease.toLocaleString()}
      </Card.Text>
      <Card.Text>
        {recovered.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default RecoveredCard;
