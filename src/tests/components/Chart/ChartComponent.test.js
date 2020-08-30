import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import store from '../../../store';
import ChartComponent from '../../../components/Chart/ChartComponent';

describe('ChartComponent', () => {
  it('renders snapshot', () => {
    const { container } = render(
      <ChartComponent />
      );

    expect(container.firstChild).toMatchSnapshot();
  });
});
