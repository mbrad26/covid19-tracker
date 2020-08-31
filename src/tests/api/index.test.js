import { fetchData } from '../../api/';
import axios from 'axios';


jest.mock('axios');

describe('fetchData', () => {
  it('returns fetched data', async () => {
    const promise = Promise.resolve({ data: {} });
    axios.get.mockImplementationOnce(() => promise);

    expect(fetchData()).toEqual(promise);
  });
});
