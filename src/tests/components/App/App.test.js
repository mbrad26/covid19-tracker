import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store/index.js';
import App from '../../../components/App/App.js';

describe('App', () => {
  it('renders snapshot', () => {
    const { asFragment } = render(
      <Provider store={store} >
        <App />
      </Provider>
      );

    expect(asFragment).toMatchSnapshot();
  });
});
