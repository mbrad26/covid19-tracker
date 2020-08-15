import React from 'react';
import { Card } from 'react-bootstrap';

const DeathsCard = ({ data }) => (
  <Card className='shadow' id='danger'>
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        {data.toLocaleString()}
      </Card.Text>
    </Card.Body>
  </Card>
)

export default DeathsCard;
