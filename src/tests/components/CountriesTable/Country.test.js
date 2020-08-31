import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store';
import { country } from '../../fixtures';
import Country from '../../../components/CountriesTable/Country';

describe('Country', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store}>
        <Country
          country={country}
          dataSuccess={jest.fn()}
          zoomOnCountry={jest.fn()}
          updateEndPoint={jest.fn()}
          historicalCountryDataLoading={jest.fn()}
        />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
