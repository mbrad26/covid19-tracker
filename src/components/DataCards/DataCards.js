import React, { useState, useEffect } from 'react';
import { fetchData } from '../../api/data';
import ConfirmedCard from './ConfirmedCard';
import DeathsCard from './DeathsCard';
import RecoveredCard from './RecoveredCard';

const DataCards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log("DATA: ", data);

  useEffect(() => {
    const data = async () => {
      setIsLoading(true);
      try {
        setIsLoading(false);
        const result = await fetchData();
        setData(result.data);
      } catch {
        setIsError(true);
      }
    }
    data();
  }, []);

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
