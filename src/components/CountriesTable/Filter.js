import React from 'react';
import { useDispatch } from 'react-redux';

import {
  doReset,
  doZoomOnCountry
} from '../../actions/mapboxData';
import {
  doUpdateEndPoint,
  doHistoricalCountryDataLoading
} from '../../actions/historicalData';

const Filter = ({ query, setQuery, filteredCountries }) => {
  const dispatch = useDispatch();

  console.log('FILTER');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (filteredCountries.length === 1) {
      dispatch(doZoomOnCountry(filteredCountries[0]));
      dispatch(doUpdateEndPoint(filteredCountries[0].country));
      dispatch(doHistoricalCountryDataLoading());
    } else {
      dispatch(doReset());
    }
    setQuery('');
  };

  return (
    <div id='form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search ...'
          value={query}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </div>
  )
}

export default Filter;
