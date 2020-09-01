import { unsortedData } from '../../fixtures';
import { filterData } from '../../../components/CountriesTable/utils';


describe('filterData', () => {
  it('filters data when query starts with capital letter', () => {
    const query = 'Afghanistan';
    const filteredData = filterData(query, unsortedData);

    expect(filteredData).toHaveLength(1);
    expect(filteredData[0].country).toEqual(query);
  });

  it('filters data when query is all caps', () => {
    const query = 'FRANCE';
    const filteredData = filterData(query, unsortedData);

    expect(filteredData).toHaveLength(1);
    expect(filteredData[0].country).toEqual('France');
  });

  it('filters data when query is in lower case', () => {
    const query = 'france';
    const filteredData = filterData(query, unsortedData);

    expect(filteredData).toHaveLength(1);
    expect(filteredData[0].country).toEqual('France');
  });
});
