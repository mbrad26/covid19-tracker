import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';

import ConfirmedCard from './ConfirmedCard';
import RecoveredCard from './RecoveredCard';
import DeathsCard from './DeathsCard';
import './DataCards.css';

const DataCards = ({
  isLoading,
  globalData,
  historicalData,
  isError,
  loadingGlobalData,
  loadingHistoricalData,
}) => {
  console.log('GlobalDataCards');
  // console.log('GLOBALDATA: ', data);

  useEffect(() => {
    loadingGlobalData()
  }, [loadingGlobalData]);

  useEffect(() => {
    loadingHistoricalData();
  }, [loadingHistoricalData]);

  return (
    <div>
      {isLoading
        ? <h3>Loading ...</h3>
        : globalData.cases ? (
          <CardDeck className='mt-3'>
            <ConfirmedCard
              cases={globalData.cases}
              casesIncrease={globalData.todayCases}
              historicalData={
                historicalData.timeline
                ? historicalData.timeline.cases
                : historicalData.cases
              }
            />
            <DeathsCard
              deaths={globalData.deaths}
              deathsIncrease={globalData.todayDeaths}
              historicalData={
                historicalData.timeline
                ? historicalData.timeline.deaths
                : historicalData.deaths
              }
            />
            <RecoveredCard
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
