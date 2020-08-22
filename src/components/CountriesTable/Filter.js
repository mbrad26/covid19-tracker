import React from 'react';

const Filter = ({ query, setQuery }) => {
  console.log('FILTER');

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
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
