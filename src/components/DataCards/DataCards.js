import React, { useState, useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';

import ConfirmedCard from './ConfirmedCard';
import DeathsCard from './DeathsCard';
import RecoveredCard from './RecoveredCard';
import './DataCards.css';

const DataCards = ({
  isLoading,
  globalData,
  historicalData,
  isError,
  loadingGlobalData,
  loadingHistoricalData,
}) => {
  const [data, setData] = useState('');
  console.log('GlobalDataCards');
  // console.log('GLOBALDATA: ', data);

  useEffect(() => {
    loadingGlobalData()
  }, [loadingGlobalData]);

  useEffect(() => {
    loadingHistoricalData()
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
            />
            <DeathsCard
              deaths={globalData.deaths}
              deathsIncrease={globalData.todayDeaths}
            />
            <RecoveredCard
              recovered={globalData.recovered}
              recoveredIncrease={globalData.todayRecovered}
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
