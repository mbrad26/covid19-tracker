import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';

import store from '../../../store';
import { country } from '../../fixtures';
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
    filteredCountries: [{}, {}, {}],
    historicalDataLoading: jest.fn(),
    historicalCountryDataLoading: jest.fn(),
  };

  it('renders snapshot', () => {
    const { container } = render (
      <Provider store={store}>
        <Filter {...filterProps} />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders all the props', () => {
    render(
      <Provider store={store}>
        <Filter {...filterProps} />
      </Provider>
    );

    expect(screen.getByPlaceholderText('Search ...')).toBeInTheDocument();
  });

  it('on input change it calls handleChange', () => {
    render(
      <Provider store={store}>
        <Filter {...filterProps} />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText('Search ...'), { target: { value: 'f' }});

    expect(filterProps.setQuery).toHaveBeenCalledWith('f');
  });

  it('calls handler on form submit when query === ""', () => {
    render(
      <Provider store={store}>
        <Filter {...filterProps} />
      </Provider>
    );

    fireEvent.submit(screen.getByTestId('form'));

    expect(filterProps.reset).toHaveBeenCalledTimes(1);
    expect(filterProps.setInactive).toHaveBeenCalledTimes(1);
    expect(filterProps.dataLoading).toHaveBeenCalledTimes(1);
    expect(filterProps.dataSuccess).toHaveBeenCalledTimes(1);
    expect(filterProps.dataSuccess).toHaveBeenCalledWith(filterProps.globalData);
    expect(filterProps.historicalDataLoading).toHaveBeenCalledTimes(1);
  });

  it('calls handler on form submit when query !== ""', () => {
    render(
      <Provider store={store}>
        <Filter
          query={'Albania'}
          globalData={{}}
          reset={jest.fn()}
          setQuery={jest.fn()}
          dataLoading={jest.fn()}
          setInactive={jest.fn()}
          dataSuccess={jest.fn()}
          zoomOnCountry={jest.fn()}
          updateEndPoint={jest.fn()}
          filteredCountries={[country]}
          historicalDataLoading={jest.fn()}
          historicalCountryDataLoading={jest.fn()}
        />
      </Provider>
    );

    fireEvent.submit(screen.getByTestId('form'), { preventDefault: { value: 'Albania' }});

    expect(filterProps.dataSuccess).toHaveBeenCalledTimes(1);
    expect(filterProps.dataSuccess).toHaveBeenCalledWith(filterProps.filteredCountries[0]);
    // expect(filterProps.zoomOnCountry).toHaveBeenCalledTimes(1);
    // expect(filterProps.zoomOnCountry).toHaveBeenCalledWith(filterProps.filteredCountries[0]);
    // expect(filterProps.updateEndPoint).toHaveBeenCalledTimes(1);
    // expect(filterProps.updateEndPoint).toHaveBeenCalledWith(filterProps.filteredCountries[0].country);
    // expect(filterProps.historicalCountryDataLoading).toHaveBeenCalledTimes(1);
  });
});
