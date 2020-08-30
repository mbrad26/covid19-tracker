import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store/index.js';
import News from '../../../containers/News';

describe('News', () => {
  it('renders snapshot', () => {
    const { asFragment } = render(
      <Provider store={store} >
        <News />
      </Provider>
    );

    expect(asFragment).toMatchSnapshot();
  });
});
