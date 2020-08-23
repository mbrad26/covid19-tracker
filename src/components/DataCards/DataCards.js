import React, { useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';

import './DataCards.css';
import DeathsCard from './DeathsCard';
import ConfirmedCard from './ConfirmedCard';
import RecoveredCard from './RecoveredCard';

const DataCards = ({
  isError,
  isLoading,
  globalData,
  historicalData,
  loadingGlobalData,
  loadingHistoricalData,
  }) => {

  console.log('DATACARDS: ', globalData);

  useEffect(() => {
    loadingGlobalData();
    loadingHistoricalData();
  }, [loadingGlobalData, loadingHistoricalData]);

  return (
    <div>
      {isLoading
        ? <h3>Loading ...</h3>
        : globalData.cases ? (
          <CardDeck className='mt-3'>
            <ConfirmedCard
              country={globalData.country ? globalData.country : 'Worldwide'}
              cases={globalData.cases}
              casesIncrease={globalData.todayCases}
              historicalData={
                historicalData.timeline
                ? historicalData.timeline.cases
                : historicalData.cases
              }
            />
            <DeathsCard
              country={globalData.country ? globalData.country : 'Worldwide'}
              deaths={globalData.deaths}
              deathsIncrease={globalData.todayDeaths}
              historicalData={
                historicalData.timeline
                ? historicalData.timeline.deaths
                : historicalData.deaths
              }
            />
            <RecoveredCard
              country={globalData.country ? globalData.country : 'Worldwide'}
              recovered={globalData.recovered}
              recoveredIncrease={globalData.todayRecovered}
              historicalData={
                historicalData.timeline
                ? historicalData.timeline.recovered
                : historicalData.recovered
              }
            />
          </CardDeck>
        )
        : null
      }
      {isError && <h3>Something went wrong ...</h3>}
    </div>
  );
};

export default DataCards;
