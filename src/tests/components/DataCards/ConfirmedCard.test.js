import React from 'react';
// import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { globalData, historicalData } from '../../fixtures';
import ConfirmedCard from '../../../components/DataCards/ConfirmedCard';

describe('ConfirmedCard', () => {
  it('renderes snapshot', () => {
    const { container } = render(
      <ConfirmedCard
        cases={globalData.cases}
        country={globalData.country ? globalData.country : 'Worldwide'}
        lastUpdated={new Date(globalData.updated).toDateString()}
        casesIncrease={globalData.todayCases}
        historicalData={historicalData}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
