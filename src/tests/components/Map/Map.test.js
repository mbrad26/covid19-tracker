import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store';
import Map from '../../../containers/Map';

describe('Map', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <Map />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
