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
});
