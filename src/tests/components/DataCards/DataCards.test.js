import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, act, waitForElement } from '@testing-library/react';

import {
  country,
  globalData,
  historicalData,
  historicalCountryData,
} from '../../fixtures';
import store from '../../../store';
import DataCards from '../../../components/DataCards/DataCards';

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

    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
  });

  it('renders the correct props when !globalData.country', async () => {
    const dataCardsProps = {
      isError: false,
      isLoading: false,
      globalData: globalData,
      historicalData: historicalData,
      loadingGlobalData: jest.fn(),
      loadingHistoricalData: jest.fn(),
    };

    render(
      <Provider store={store} >
        <DataCards {...dataCardsProps}/>
      </Provider>
    );

    await waitForElement(() => screen.queryByText('+65,863'));
    await waitForElement(() => screen.queryByText('+1,517'));
    await waitForElement(() => screen.queryByText('+61,575'));

    expect(screen.queryByText('+65,863')).toBeInTheDocument();
    expect(screen.queryByText('+1,517')).toBeInTheDocument();
    expect(screen.queryByText('+61,575')).toBeInTheDocument();
    expect(screen.getByText('855,941')).toBeInTheDocument();
    expect(screen.getByText('17,994,215')).toBeInTheDocument();
    expect(screen.getByText('25,694,157')).toBeInTheDocument();
    expect(screen.getAllByText(/Worldwide/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Worldwide/)[1]).toBeInTheDocument();
    expect(screen.getAllByText(/Worldwide/)[2]).toBeInTheDocument();
  });

  it('renders the correct props when globalData.country', async () => {
    const dataCardsProps = {
      isError: false,
      isLoading: false,
      globalData: country,
      historicalData: historicalCountryData,
      loadingGlobalData: jest.fn(),
      loadingHistoricalData: jest.fn(),
    };

    render(
      <Provider store={store} >
        <DataCards {...dataCardsProps}/>
      </Provider>
    );

    screen.debug();

    await waitForElement(() => screen.queryByText('+133'));
    await waitForElement(() => screen.queryByText('+4'));
    await waitForElement(() => screen.queryByText('+75'));
    
    expect(screen.queryByText('+133')).toBeInTheDocument();
    expect(screen.queryByText('+4')).toBeInTheDocument();
    expect(screen.queryByText('+75')).toBeInTheDocument();
    expect(screen.getByText('9,513')).toBeInTheDocument();
    expect(screen.getByText('284')).toBeInTheDocument();
    expect(screen.getByText('5,214')).toBeInTheDocument();
    expect(screen.getAllByText(/Albania/)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Albania/)[1]).toBeInTheDocument();
    expect(screen.getAllByText(/Albania/)[2]).toBeInTheDocument();
  });
});
