const getViewPort = state => state;

const getData = state => state.data;

const getNhsData = state => state.data;

const getActiveCountry = state => state.active;

const getIsErrorStatus = state => state.isError;

const getNewsData = state => state.data.articles;

const getIsLoadingStatus = state => state.isLoading;

const getEndPoint = state => state.endPoint;

export {
  getData,
  getNhsData,
  getNewsData,
  getViewPort,
  getEndPoint,
  getActiveCountry,
  getIsErrorStatus,
  getIsLoadingStatus,
};
