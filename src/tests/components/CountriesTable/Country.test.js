import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import store from '../../../store';
import { country } from '../../fixtures';
import Country from '../../../components/CountriesTable/Country';

describe('Country', () => {
  const countryProps = {
    country: country,
    setActive: jest.fn(),
    setInactive: jest.fn(),
    dataSuccess: jest.fn(),
    zoomOnCountry: jest.fn(),
    updateEndPoint: jest.fn(),
    historicalCountryDataLoading: jest.fn(),
  }

  const table = document.createElement('table');

  beforeEach(() => {
    jest.useFakeTimers();
    render(
      <Provider store={store}>
        <Country {...countryProps}/>
      </Provider>, {
        container: document.body.appendChild(table),
      }
    );
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });


  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Country {...countryProps} />
      </Provider>, {
        container: document.body.appendChild(table),
      }
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders all the props', () => {
    expect(screen.getByText('284')).toBeInTheDocument();
    expect(screen.getByText('9,513')).toBeInTheDocument();
    expect(screen.getByText('5,214')).toBeInTheDocument();
  });

  it('renders an image', () => {
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Albania flag');
  });

  it('renders a button', () => {
    expect(screen.getByRole('button', { name: 'Albania'})).toBeInTheDocument();
  });

  it('clicking the button calls the callback handler', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Albania' }));

    expect(countryProps.dataSuccess).toHaveBeenCalledTimes(1);
    expect(countryProps.dataSuccess).toHaveBeenCalledWith(country);
    expect(countryProps.updateEndPoint).toHaveBeenCalledTimes(1);
    expect(countryProps.updateEndPoint).toHaveBeenCalledWith(country.country);
    expect(countryProps.historicalCountryDataLoading).toHaveBeenCalledTimes(1);
    expect(countryProps.zoomOnCountry).toHaveBeenCalledTimes(1);
    expect(countryProps.zoomOnCountry).toHaveBeenCalledWith(country);
    expect(countryProps.setInactive).toHaveBeenCalledTimes(1);
  });

  it('clicking the button setActive after 2 seconds', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Albania' }));

    expect(countryProps.setActive).toHaveBeenCalledTimes(1);
    expect(countryProps.setActive).toHaveBeenCalledWith(country);
  });

});
