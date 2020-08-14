import React from 'react';
import { Table } from 'react-bootstrap';

const CountriesTable = () => (
  <div className='mt-3'>
    <Table striped bordered hover size='sm'>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Country</th>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Recovered</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </Table>
  </div>
)

export default CountriesTable;
