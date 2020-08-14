import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CardDeck } from 'react-bootstrap';

import ConfirmedCard from './ConfirmedCard';
import DeathsCard from './DeathsCard';
import RecoveredCard from './RecoveredCard';
import { doDataLoading } from '../../actions/data.js';
import './GlobalDataCards.module.css';

const GlobalDataCards = ({ isLoading, data, isError, loadingData }) => {
  console.log('DataCards');

  useEffect(() => {
    loadingData()
  }, []);

  return (
    <div>
      {isLoading
        ? <h3>Loading ...</h3>
        : data.confirmed ? (
          <CardDeck className='mt-3 text-white'>
            <ConfirmedCard data={data.confirmed} />
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
