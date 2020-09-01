import React from 'react';
// import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { globalData, historicalData } from '../../fixtures';
import DeathsCard from '../../../components/DataCards/DeathsCard';

describe('DeathsCard', () => {
  it('renderes snapshot', () => {
    const { container } = render(
      <DeathsCard
        deaths={globalData.deaths}
        country={globalData.country ? globalData.country : 'Worldwide'}
        lastUpdated={new Date(globalData.updated).toDateString()}
        deathsIncrease={globalData.todayDeaths}
        historicalData={historicalData}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
