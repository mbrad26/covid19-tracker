import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';

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
          <Row>
            <Col md={4} className='mt-3' id='card-cases'>
              <ConfirmedCard
                country={globalData.country ? globalData.country : 'Worldwide'}
                lastUpdated={new Date(globalData.updated).toDateString()}
                cases={globalData.cases}
                casesIncrease={globalData.todayCases}
                historicalData={
                  historicalData.timeline
                  ? historicalData.timeline.cases
                  : historicalData.cases
                }
              />
            </Col>
            <Col md={4} className='mt-3' id='card-deaths'>
              <DeathsCard
                country={globalData.country ? globalData.country : 'Worldwide'}
                lastUpdated={new Date(globalData.updated).toDateString()}
                deaths={globalData.deaths}
                deathsIncrease={globalData.todayDeaths}
                historicalData={
                  historicalData.timeline
                  ? historicalData.timeline.deaths
                  : historicalData.deaths
                }
              />
            </Col>
            <Col md={4} className='mt-3' id='card-recovered'>
              <RecoveredCard
                country={globalData.country ? globalData.country : 'Worldwide'}
                lastUpdated={new Date(globalData.updated).toDateString()}
                recovered={globalData.recovered}
                recoveredIncrease={globalData.todayRecovered}
                historicalData={
                  historicalData.timeline
                  ? historicalData.timeline.recovered
                  : historicalData.recovered
                }
              />
              </Col>
          </Row>
        )
        : null
      }
      {isError && <h3>Something went wrong ...</h3>}
    </div>
  );
};

export default DataCards;
