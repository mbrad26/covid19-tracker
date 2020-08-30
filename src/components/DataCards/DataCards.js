import React, { useEffect } from 'react';
import { Spinner, Row, Col } from 'react-bootstrap';

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

  useEffect(() => {
    loadingGlobalData();
    loadingHistoricalData();
  }, [loadingGlobalData, loadingHistoricalData]);

  return (
    <div>
      {isLoading && <Spinner id='spinner-cards' animation="border" variant="light" role="status" />}
      {globalData.cases &&
        <Row id='holder'>
          <Col md={12} lg={4} className='' id='card-cases'>
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
          <Col md={12} lg={4} className='' id='card-deaths'>
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
          <Col md={12} lg={4} className='' id='card-recovered'>
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
      }
      {isError && <h3>Something went wrong ...</h3>}
    </div>
  );
};

export default DataCards;
