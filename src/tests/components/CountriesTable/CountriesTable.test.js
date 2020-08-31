import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store';
import CountriesTable from '../../../components/CountriesTable/CountriesTable';

describe('CountriesTable', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <Provider store={store} >
        <CountriesTable
          data={[]}
          isError={false}
          isLoading={false}
          onSortData={jest.fn()}
          loadingData={jest.fn()}
        />
      </Provider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
