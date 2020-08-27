const getViewPort = state => state;

const getData = state => state.data;

const getNewsData = state => state.data.articles;

const getActiveCountry = state => state.active;

const getIsErrorStatus = state => state.isError;

const getIsLoadingStatus = state => state.isLoading;

export {
  getData,
  getNewsData,
  getViewPort,
  getActiveCountry,
  getIsErrorStatus,
  getIsLoadingStatus,
};
