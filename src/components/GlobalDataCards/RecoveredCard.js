import React from 'react';
import { Card } from 'react-bootstrap';

const RecoveredCard = ({ data }) => (
  <Card className='shadow' id='success'>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        {data.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default RecoveredCard;
