import React from 'react';
import { useDispatch } from 'react-redux';

import { doReset, doZoomOnCountry } from '../../actions/mapboxData';

const Filter = ({ query, setQuery, filteredCountries }) => {
  const dispatch = useDispatch();

  console.log('FILTER');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    filteredCountries.length === 1
      ? dispatch(doZoomOnCountry(filteredCountries[0]))
      : dispatch(doReset());
    setQuery('');
  };

  return (
    <div id='form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search for ...'
          value={query}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </div>
  )
}

export default Filter;
