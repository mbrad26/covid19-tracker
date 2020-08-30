import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store';
import CountriesTable from '../../../containers/CountriesTable';

describe('CountriesTable', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <CountriesTable />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
