import React from 'react';

const Filter = ({
  query,
  reset,
  setQuery,
  globalData,
  setInactive,
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

  console.log('FILTERED_COUNTRIES: ', filteredCountries);

  const handleSubmit = event => {
    event.preventDefault();
    if (filteredCountries.length === 1) {
      dataSuccess(filteredCountries[0]);
      zoomOnCountry(filteredCountries[0]);
      updateEndPoint(filteredCountries[0].country);
      historicalCountryDataLoading();
    } else {
      reset();
      setInactive();
      dataLoading();
      dataSuccess(globalData);
      historicalDataLoading();
    }
    setQuery('');
  };

  return (
    <div id='form'>
      <form data-testid='form' onSubmit={handleSubmit}>
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
