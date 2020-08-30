import {
  doReset,
  doZoomOnCountry,
  doChangeViewPort
} from '../../actions/mapboxData';

describe('doReset', () => {
  it('returns the correct object', () => {
    const action = doReset();
    const expectedAction = {
      type: 'RESET',
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doZoomOnCountry', () => {
  it('returns the correct object', () => {
    const data = {};
    const action = doZoomOnCountry(data);
    const expectedAction = {
      type: 'ZOOM_ON_COUNTRY',
      payload: data,
    };

    expect(action).toEqual(expectedAction);
  });
});

describe('doChangeViewPort', () => {
  it('returns the correct object', () => {
    const viewPort = {};
    const action = doChangeViewPort(viewPort);
    const expectedAction = {
      type: 'CHANGE_VIEWPORT',
      payload: viewPort,
    };

    expect(action).toEqual(expectedAction);
  });
});
