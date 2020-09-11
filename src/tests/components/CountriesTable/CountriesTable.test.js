import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';

import store from '../../../store';
import { unsortedData } from '../../fixtures';
import CountriesTable from '../../../components/CountriesTable/CountriesTable';

describe('CountriesTable', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <CountriesTable
          data={unsortedData}
          isError={false}
          isLoading={false}
          onSortData={jest.fn()}
          loadingData={jest.fn()}
        />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('calls handler on button click', async () => {
    const countriesProps = {
      data: unsortedData,
      isError: false,
      isLoading: false,
      onSortData: jest.fn(),
      loadingData: jest.fn(),
    }

    render(
      <Provider store={store} >
        <CountriesTable {...countriesProps} />
      </Provider>
    );

    expect(screen.getAllByRole('button')[3].innerHTML).toEqual('Afghanistan');

    fireEvent.click(screen.getByText('Cases'));

    expect(countriesProps.onSortData).toHaveBeenCalledTimes(1);
    expect(countriesProps.onSortData).toHaveBeenCalledWith('cases', 'asc');

    fireEvent.click(screen.getByText('Cases'));

    expect(countriesProps.onSortData).toHaveBeenCalledTimes(2);
    expect(countriesProps.onSortData).toHaveBeenCalledWith('cases', 'desc');
  });

  it('displays an error message when fetching data fails', () => {
    const countriesProps = {
      data: [],
      isError: true,
      isLoading: false,
      onSortData: jest.fn(),
      loadingData: jest.fn(),
    }

    render(
      <Provider store={store} >
        <CountriesTable {...countriesProps} />
      </Provider>
    );

    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
  });

  it('displays a spinner when loading data', () => {
    const countriesProps = {
      data: [],
      isError: false,
      isLoading: true,
      onSortData: jest.fn(),
      loadingData: jest.fn(),
    }

    render(
      <Provider store={store} >
        <CountriesTable {...countriesProps} />
      </Provider>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveAttribute(
      'class',
      'spinner-border text-dark'
    );
  });
});
