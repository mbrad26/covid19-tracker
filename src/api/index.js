import { GLOBAL_URL, COUNTRIES_URL } from './api';

import axios from 'axios';

const fetchData = async () => {
  const result = await axios.get(GLOBAL_URL);

  return result;
};

export { fetchData };
