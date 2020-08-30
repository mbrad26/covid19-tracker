import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store/index.js';
import DataCards from '../../../containers/DataCards';

describe('DataCards', () => {
  it('renders snapshot', () => {
    const { asFragment } = render(
      <Provider store={store} >
        <DataCards />
      </Provider>
    );

    expect(asFragment).toMatchSnapshot();
  });
});
