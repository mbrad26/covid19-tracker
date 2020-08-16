import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import Country from './Country';
import Search from './Search';
import './CountriesTable.css';

const CountriesTable = ({ isLoading, data, isError, loadingData }) => {
  const [query, setQuery] = useState('');
  console.log('CountriesTable');
  // console.log('TABLE DATA: ', data);

  useEffect(() => {
    loadingData()
  }, [loadingData]);

  const filterData = data =>
    data.filter(country => country.country.toLowerCase().includes(query.toLowerCase()))

  return (
    <div className='mt-3 shadow' id='table'>
      <Table hover className='shadow'>
        <thead>
          <tr>
            <th>Flag</th>
            <th>
              <Search query={query} setQuery={setQuery} />
            </th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
          </tr>
        </thead>
        <tbody>
        {filterData(data).map(
          country => <Country key={country.country} country={country} />
        )}
        </tbody>
      </Table>
    </div>
  )
}

export default CountriesTable;
