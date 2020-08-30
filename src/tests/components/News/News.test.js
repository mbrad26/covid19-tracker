import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store';
import News from '../../../containers/News';

describe('News', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <News />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
