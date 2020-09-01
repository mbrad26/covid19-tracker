import React from 'react';
// import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import { globalData, historicalData } from '../../fixtures';
import RecoveredCard from '../../../components/DataCards/RecoveredCard';

describe('RecoveredCard', () => {
  it('renderes snapshot', () => {
    // const { container } = render(
    //   <RecoveredCard
    //     recovered={globalData.recovered}
    //     country={globalData.country ? globalData.country : 'Worldwide'}
    //     lastUpdated={new Date(globalData.updated).toDateString()}
    //     recoveredIncrease={globalData.todayRecovered}
    //     historicalData={historicalData}
    //   />
    // );
    //
    // expect(container.firstChild).toMatchSnapshot();
  });
});
