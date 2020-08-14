import React, { useEffect } from 'react';
import { connect } from 'react-redux';

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
          <>
            <ConfirmedCard />
            <p>Confirmed:<span> {data.confirmed.value.toLocaleString()}</span></p>
            <DeathsCard />
            <p>Deaths:<span> {data.deaths.value.toLocaleString()}</span></p>
            <RecoveredCard />
            <p>Recovered:<span> {data.recovered.value.toLocaleString()}</span></p>
          </>
        )
        : null
      }
      {isError && <h3>Something went wrong ...</h3>}
    </>
  );
};

export default DataCards;
