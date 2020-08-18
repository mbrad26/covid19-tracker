import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import Country from './Country';
import Filter from './Filter';
import './CountriesTable.css';

const CountriesTable = ({ data, loadingData, onSortData }) => {
  const [sort, setSort] = useState('asc');
  const [query, setQuery] = useState('');

  console.log('CountriesTable');

  useEffect(() => {
    loadingData()
  }, [loadingData]);

  const handleClick = event => {
    sort === 'asc' ? setSort('desc') : setSort('asc');
    onSortData(event.target.getAttribute('id'), sort);
  };

  const filterData = data =>
          data.filter(country =>
            country.country.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='mt-3 shadow' id='table'>
      <Table className='shadow'>
        <thead>
          <tr>
            <th>Flag</th>
            <th>
              <Filter
                query={query}
                setQuery={setQuery}
              />
            </th>
            <th>
              <button onClick={handleClick} id='cases'>
                Cases
              </button>
            </th>
            <th>
              <button onClick={handleClick} id='deaths'>
                Deaths
              </button>
            </th>
            <th>
              <button onClick={handleClick} id='recovered'>
                Recovered
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
        {filterData(data).map(country =>
          <Country key={country.country} country={country} />
        )}
        </tbody>
      </Table>
    </div>
  )
}

export default CountriesTable;
