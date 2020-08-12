import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

const fetchData = async () => {
  const result = await axios.get(url);

  return result;
};

export { fetchData };
