import React from 'react';
import { Card } from 'react-bootstrap';

const RecoveredCard = ({ data }) => (
  <Card className='bg-success' style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        {data.value.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default RecoveredCard;
