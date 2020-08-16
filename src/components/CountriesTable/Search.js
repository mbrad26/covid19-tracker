import React, { useState, useEffect } from 'react';

const Search = ({ query, setQuery }) => {

  console.log('QUERY: ', query);

  const handleChange = event => {
    setQuery(event.target.value);
  };

  // useEffect(() => {
  //   onSearch(query)
  // }, [query])

  const handleSubmit = event => {
    event.preventDefault();
    setQuery('');
  };

  return (
    <div id='form'>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='Search for ...'
          value={query}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </div>
  )
}

export default Search;
