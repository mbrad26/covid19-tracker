import { stats } from '../../../components/Map/utils';

describe('stats', () => {
  it('returns 1 when cases < 5000', () => {
    expect(stats(200)).toEqual(1);
  });

  it('returns 2 when cases < 10000', () => {
    expect(stats(6000)).toEqual(2);
  });

  it('returns 3 when cases < 50000', () => {
    expect(stats(20000)).toEqual(3);
  })

  it('returns 4 when cases < 100000', () => {
    expect(stats(90000)).toEqual(4);
  });

  it('returns 5 when cases < 300000', () => {
    expect(stats(200000)).toEqual(5);
  });

  it('returns 6 when cases < 500000', () => {
    expect(stats(400000)).toEqual(6);
  });

  it('returns 7 when cases < 1000000', () => {
    expect(stats(900000)).toEqual(7);
  });

  it('returns 8 when cases < 5000000', () => {
    expect(stats(4000000)).toEqual(8);
  });

  it('returns 9 when cases > 5000000', () => {
    expect(stats(6000000)).toEqual(9);
  });
});
