import React from 'react';
import { render } from '@testing-library/react';

import { country } from '../../fixtures';
import Info from '../../../components/Map/Info';

describe('Info', () => {
  it('renders a snapshot', () => {
    const { container } = render(
      <Info activeCountry={country} />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
