import {
  getData,
  getNhsData,
  getNewsData,
  getViewPort,
  getActiveCountry,
  getIsErrorStatus,
  getIsLoadingStatus,
} from '../../selectors/data';

describe('getData', () => {
  it('returns data object', () => {
    const state = { data: {}, };

    expect(getData(state)).toBe(state.data);
  });
});

describe('getNhsData', () => {
  it('returns data object', () => {
    const state = { data: {}, };

    expect(getNhsData(state)).toBe(state.data);
  });
});

describe('getNewsData', () => {
  it('returns data object', () => {
    const state = { data: { articles: {} }};

    expect(getNewsData(state)).toBe(state.data.articles);
  });
});

describe('getViewPort', () => {
  it('returns data object', () => {
    const state = {};

    expect(getViewPort(state)).toBe(state);
  });
});

describe('getActiveCountry)', () => {
  it('returns data object', () => {
    const state = { active: {}, };

    expect(getActiveCountry(state)).toBe(state.active);
  });
});

describe('getIsErrorStatus)', () => {
  it('returns data object', () => {
    const state = { isError: true, };

    expect(getIsErrorStatus(state)).toBe(true);
  });
});

describe('getIsLoadingStatus)', () => {
  it('returns data object', () => {
    const state = { isLoading: true, };

    expect(getIsLoadingStatus(state)).toBe(true);
  });
});
