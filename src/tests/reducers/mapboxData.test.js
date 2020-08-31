import mapboxDataReducer from '../../reducers/mapboxData';

describe('mapboxDataReducer', () => {
  const initialState = { zoom: 0.85,
                          maxZoom: 11,
                          minZoom: 0.7,
                          latitude: 43,
                          longitude: 10,
                          width: window.innerWidth * 0.58,
                          height: window.innerHeight * 0.65,
                        };

  it('returns state with initial values', () => {
    const action = { type: 'RESET' };
    const state = { width: window.innerWidth * 0.58,
                    height: window.innerHeight * 0.65,
                    latitude: 42.5,
                    longitude: 1.62,
                    maxZoom: 11,
                    minZoom: 0.7,
                    zoom: 4.15,
                  };
    const expectedState = initialState;

    const newState = mapboxDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state with changed viewPort', () => {
    const viewPort = { altitude: 1.5,
                       bearing: 0,
                       height: 610,
                       latitude: 43.00000000000066,
                       longitude: 10.000000000011184,
                       maxPitch: 60,
                       maxZoom: 11,
                       minPitch: 0,
                       minZoom: 0.7,
                       pitch: 0,
                       transitionDuration: 2500,
                     };
    const action = { type: 'CHANGE_VIEWPORT', payload: viewPort };
    const state = { width: window.innerWidth * 0.58,
                    height: window.innerHeight * 0.65,
                    latitude: 42.5,
                    longitude: 1.62,
                    maxZoom: 11,
                    minZoom: 0.7,
                    zoom: 4.15,
                  };
    const expectedState = { zoom: viewPort.zoom,
                            maxZoom: viewPort.maxZoom,
                            minZoom: viewPort.minZoom,
                            latitude: viewPort.latitude,
                            longitude: viewPort.longitude,
                            width: window.innerWidth * 0.58,
                            height: window.innerHeight * 0.65,
                          }

    const newState = mapboxDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

  it('returns state zoom on country', () => {
    const data = { countryInfo: { lat: 34, long: 65, zomm: 4.1 }};
    const action = { type: 'ZOOM_ON_COUNTRY', payload: data};
    const state = initialState;
    const expectedState = { zoom: 4.1,
                            latitude: 34,
                            longitude: 65,
                            maxZoom: 11,
                            minZoom: 0.7,
                            width: window.innerWidth * 0.58,
                            height: window.innerHeight * 0.65,
                          };

    const newState = mapboxDataReducer(state, action);

    expect(newState).toStrictEqual(expectedState);
  });

});
