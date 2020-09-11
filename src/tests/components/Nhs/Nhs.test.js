import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store';
import { nhsData } from '../../fixtures';
import Nhs from '../../../components/Nhs/Nhs';

describe('Nhs', () => {
  const nhsProps = {
    nhsData: nhsData,
    isError: false,
    isLoading: false,
    loadingNhsData: jest.fn(),
  };

  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <Nhs {...nhsProps} />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the correct props when isError', () => {
    const nhsProps = {
      nhsData: [],
      isError: true,
      isLoading: false,
      loadingNhsData: jest.fn(),
    };

    render(
      <Provider store={store} >
        <Nhs {...nhsProps} />
      </Provider>
    );

    expect(screen.getByText(/Something went wrong/)).toBeInTheDocument();
  });

  it('renders the correct props when isLoading', () => {
    const nhsProps = {
      nhsData: [],
      isError: false,
      isLoading: true,
      loadingNhsData: jest.fn(),
    };

    render(
      <Provider store={store} >
        <Nhs {...nhsProps} />
      </Provider>
    );

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByRole('status')).toHaveAttribute(
      'class',
      'spinner-border text-dark'
    );
  });
});
