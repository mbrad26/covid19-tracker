import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store/';
import { country } from '../../fixtures';
import PopupComponent from '../../../components/Map/PopupComponent';

describe('PopupComponent', () => {
  const popupProps = {
    activeCountry: null,
    onSetInactive: jest.fn(),
  }

  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <PopupComponent {...popupProps} />
      </Provider>
    );

    screen.debug();

    expect(container.firstChild).toMatchSnapshot();
  });
});
