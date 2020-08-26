import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { doNHSLoading } from '../../actions/nhsData';

const Nhs = () => {
  const nhsData = useSelector(state => state.nhsDataState.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doNHSLoading());
  }, [dispatch]);
  
  return(
    <div>
      NHS
    </div>
  );
};

export default Nhs;
