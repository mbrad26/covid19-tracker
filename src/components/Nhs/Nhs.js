import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Nhs.css';
import { doNHSLoading } from '../../actions/nhsData';

const Nhs = () => {
  const nhsData = useSelector(state => state.nhsDataState.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doNHSLoading());
  }, [dispatch]);

  return(
    <div id='nhs'>
      {nhsData.author &&
        nhsData.hasPart.map(part =>
          <p>{part.description}</p>
        )
      }
    </div>
  );
};

export default Nhs;
