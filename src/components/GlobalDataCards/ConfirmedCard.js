import React from 'react';
import { Card } from 'react-bootstrap';

const ConfirmedCard = ({ data }) => (
  <Card className='bg-warning' style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Confirmed</Card.Title>
      <Card.Text>
        {data.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default ConfirmedCard;
