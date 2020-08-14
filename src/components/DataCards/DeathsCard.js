import React from 'react';
import { Card } from 'react-bootstrap';

const DeathsCard = ({ data }) => (
  <Card className='bg-danger' style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        {data.value.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default DeathsCard;
