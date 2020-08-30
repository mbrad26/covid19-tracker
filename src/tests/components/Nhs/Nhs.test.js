import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store/index.js';
import Nhs from '../../../containers/Nhs';

describe('Nhs', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <Nhs />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
