import React, { useEffect } from 'react';
import { Tabs, Tab, Spinner } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';

import './Nhs.css';
import { formatter } from './utils';

const Nhs = ({
  nhsData,
  isError,
  isLoading,
  loadingNhsData,
  }) => {
  useEffect(() => {
    loadingNhsData();
  }, [loadingNhsData]);

  return (
    <div id='nhs'>
      {isLoading && <Spinner id='spinner-nhs' animation="border" variant="light" role="status"/>}
      {nhsData.author &&
        <Tabs defaultActiveKey="overview">
          {nhsData.hasPart.map(part =>
            <Tab key={part.name} eventKey={part.name} title={formatter(part.name)}>
              <img src={nhsData.author.logo} alt='NHS logo'/>
              <hr />
              {ReactHtmlParser(part.text)}
              <p>
                <a href={part.url} target='_blank' rel='noopener noreferrer'>
                  More details on NHS webpage
                </a>
              </p>
            </Tab>
          )}
        </Tabs>
      }
      {isError && <h3>Something went wrong ...</h3>}
  </div>
  );
};

export default Nhs;
