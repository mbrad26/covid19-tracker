import React from 'react';

const Filter = ({
  query,
  reset,
  setQuery,
  globalData,
  dataLoading,
  dataSuccess,
  zoomOnCountry,
  updateEndPoint,
  filteredCountries,
  historicalDataLoading,
  historicalCountryDataLoading,
  }) => {

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (filteredCountries.length === 1) {
      dataSuccess(filteredCountries[0]);
      zoomOnCountry(filteredCountries[0]);
      updateEndPoint(filteredCountries[0].country);
      historicalCountryDataLoading();
    } else {
      reset();
      dataLoading();
      dataSuccess(globalData);
      historicalDataLoading();
    }
    setQuery('');
  };

  console.log('FILTER');

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
