import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';

import Country from './Country';
import Search from './Search'
import './CountriesTable.css';

const CountriesTable = ({ isLoading, data, isError, loadingData }) => {
  // console.log('CountriesTable');
  console.log('TABLE DATA: ', data[5]);

  useEffect(() => {
    loadingData()
  }, [loadingData]);

  return (
    <div className='mt-3 shadow' id='table'>
      <Table hover >
        <thead>
          <tr>
            <th>Flag</th>
            <th>
              <Search />
            </th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
        {data.map(
          country => <Country key={country.country} country={country} />
        )}
        </tbody>
      </Table>
    </div>
  )
}

export default CountriesTable;
