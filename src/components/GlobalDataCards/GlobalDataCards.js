import React, { useEffect } from 'react';
import { CardDeck } from 'react-bootstrap';

import ConfirmedCard from './ConfirmedCard';
import DeathsCard from './DeathsCard';
import RecoveredCard from './RecoveredCard';
import './GlobalDataCards.css';

const GlobalDataCards = ({ isLoading, data, isError, loadingData }) => {
  // console.log('GlobalDataCards');

  useEffect(() => {
    loadingData()
  }, [loadingData]);

  return (
    <div>
      {isLoading
        ? <h3>Loading ...</h3>
        : data.cases ? (
          <CardDeck className='mt-3'>
            <ConfirmedCard data={data.cases} />
            <DeathsCard data={data.deaths} />
            <RecoveredCard data={data.recovered} />
          </CardDeck>
        )
        : null
      }
      {isError && <h3>Something went wrong ...</h3>}
    </div>
  );
};

export default GlobalDataCards;
