import React, { useState, useEffect } from 'react';
import { Table, Spinner } from 'react-bootstrap';

import './CountriesTable.css';
import { filterData } from './utils';
import Filter from '../../containers/Filter';
import Country from '../../containers/Country.js';

const CountriesTable = ({
  data,
  isError,
  isLoading,
  onSortData,
  loadingData,
  }) => {
  const [sort, setSort] = useState('asc');
  const [query, setQuery] = useState('');
  const filteredCountries = filterData(query, data)

  const handleClick = event => {
    sort === 'asc' ? setSort('desc') : setSort('asc');
    onSortData(event.target.getAttribute('id'), sort);
  };

  useEffect(() => {
    loadingData()
  }, [loadingData]);

  return (
     <div id='table-container'>
      {isLoading
        ? <Spinner id='spinner' animation="border" variant="primary" role="status"/>
        : <Table size='sm'>
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
            {filteredCountries.map(country =>
              <Country key={country.country} country={country} />
            )}
          </Table>
        }
        {isError && <h3>Something went wrong ...</h3>}
    </div>
  );
};

export default CountriesTable;
