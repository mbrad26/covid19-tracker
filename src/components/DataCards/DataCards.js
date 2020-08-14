import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CardDeck } from 'react-bootstrap';

import ConfirmedCard from './ConfirmedCard';
import DeathsCard from './DeathsCard';
import RecoveredCard from './RecoveredCard';
import { doDataLoading } from '../../actions/data.js';

const DataCards = ({ isLoading, data, isError, loadingData }) => {
  console.log('DataCards');

  useEffect(() => {
    loadingData()
  }, [loadingData]);

  return (
    <>
      {isLoading
        ? <h3>Loading ...</h3>
        : data.confirmed ? (
          <CardDeck className='col-8'>
            <ConfirmedCard data={data.confirmed} />
            <DeathsCard data={data.deaths}/>
            <RecoveredCard data={data.recovered}/>
          </CardDeck>
        )
        : null
      }
      {isError && <h3>Something went wrong ...</h3>}
    </>
  );
};

export default DataCards;
