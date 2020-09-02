import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';

import store from '../../../store/';
import { country } from '../../fixtures';
import { Popup } from 'react-map-gl';
import PopupComponent from '../../../containers/PopupComponent';

describe('PopupComponent', () => {
  it('renders snapshot', () => {
    const popupProps = {
      activeCountry: null,
      onSetInactive: jest.fn(),
    };

    const { container } = render(
      <Provider store={store}>
        <PopupComponent {...popupProps} />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
