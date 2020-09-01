import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store';
import Filter from '../../../components/CountriesTable/Filter';

describe('Filter', () => {
  const filterProps = {
    query: '',
    reset: jest.fn(),
    setQuery: jest.fn(),
    globalData: {},
    setInactive: jest.fn(),
    dataLoading: jest.fn(),
    dataSuccess: jest.fn(),
    zoomOnCountry: jest.fn(),
    updateEndPoint: jest.fn(),
    filteredCountries: {},
    historicalDataLoading: jest.fn(),
    historicalCountryDataLoading: jest.fn(),
  };

  it('renders snapshot', () => {
    const { container } = render (
      <Provider store={store}>
        <Filter {...filterProps} />
      </Provider>
    );

    screen.debug();

    expect(container.firstChild).toMatchSnapshot();
  });
});
