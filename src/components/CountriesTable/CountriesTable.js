import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

import Country from '../../containers/Country.js';
import Filter from './Filter';
import { filterData } from './utils';
import './CountriesTable.css';

const CountriesTable = ({ data, loadingData, onSortData }) => {
  const [sort, setSort] = useState('asc');
  const [query, setQuery] = useState('');

  const filteredCountries = filterData(query, data)

  const handleClick = event => {
    sort === 'asc' ? setSort('desc') : setSort('asc');
    onSortData(event.target.getAttribute('id'), sort);
  };

  console.log('TABLE');
  console.log('LENGTH COUNTRY LIST: ', filteredCountries.length);

  useEffect(() => {
    loadingData()
  }, [loadingData]);

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
                filteredCountries={filteredCountries}
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
        {filteredCountries.map(country =>
          <Country key={country.country} country={country} />
        )}
        </tbody>
      </Table>
    </div>
  )
}

export default CountriesTable;
