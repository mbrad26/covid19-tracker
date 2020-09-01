import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, act } from '@testing-library/react';
import axios from 'axios';

import store from '../../../store';
import { globalData, historicalData } from '../../fixtures';
import DataCards from '../../../components/DataCards/DataCards';

jest.mock('axios');

describe('DataCards', () => {
  it('renders snapshot', () => {
    const dataCardsProps = {
      isError: false,
      isLoading: false,
      globalData: globalData,
      historicalData: historicalData,
      loadingGlobalData: jest.fn(),
      loadingHistoricalData: jest.fn(),
    };

    const { container } = render(
      <Provider store={store} >
        <DataCards {...dataCardsProps}/>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('displays an error message when fetching data fails', () => {
    const dataCardsProps = {
      isError: true,
      isLoading: false,
      globalData: {},
      historicalData: {},
      loadingGlobalData: jest.fn(),
      loadingHistoricalData: jest.fn(),
    };

    render(
      <Provider store={store} >
        <DataCards {...dataCardsProps}/>
      </Provider>
    );

    screen.debug();

    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
  });
});
