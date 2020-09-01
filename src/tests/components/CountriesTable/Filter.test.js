import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

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

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Filter {...filterProps} />
      </Provider>
    );
  });

  it('renders snapshot', () => {
    const { container } = render (
      <Provider store={store}>
        <Filter {...filterProps} />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders all the props', () => {
    expect(screen.getByPlaceholderText('Search ...')).toBeInTheDocument();
  });

  it('on input change it calls handleChange', () => {
    fireEvent.change(screen.getByPlaceholderText('Search ...'), { target: { value: 'f' }});

    screen.debug();

    expect(filterProps.setQuery).toHaveBeenCalledWith('f');
  });
});
