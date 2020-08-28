import React, { useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import { useDispatch, useSelector } from 'react-redux';

import './Nhs.css';
import { doNHSLoading } from '../../actions/nhsData';

const Nhs = () => {
  const nhsData = useSelector(state => state.nhsDataState.data);
  const dispatch = useDispatch();

  const formatter = string => {
    let str = string.includes('_')
                ? string.split('_').join(' ')
                : string

  return str.split('_').join(' ')[0].toUpperCase() + str.slice(1);
}


  useEffect(() => {
    dispatch(doNHSLoading());
  }, [dispatch]);

  return (
    <div id='nhs'>
      {nhsData.author &&
        <Tabs defaultActiveKey="overview">
          {nhsData.hasPart.map(part =>
            <Tab eventKey={part.name} title={formatter(part.name)}>
              {ReactHtmlParser(part.text)}
            </Tab>
          )}
        </Tabs>
      }
  </div>
  );
};

export default Nhs;
