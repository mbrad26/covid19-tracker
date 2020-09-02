import React from 'react';
import { Provider } from 'react-redux';
import { render, screen, waitForElement } from '@testing-library/react';

import store from '../../../store/';
import { unsortedData, country } from '../../fixtures';
import { Marker } from 'react-map-gl';
import MarkerComponent from '../../../containers/MarkerComponent';

describe('MarkerComponent', () => {
  const markerComponentProps = {
    countries: unsortedData,
    onSetActive: jest.fn(),
  };

  const markerProps = {
    key: country.country,
    latitude: country.countryInfo.lat,
    longitude: country.countryInfo.long,
  };

  it('renders a snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <MarkerComponent {...markerComponentProps} >
          <Marker {...markerProps} />
        </MarkerComponent>
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

});
