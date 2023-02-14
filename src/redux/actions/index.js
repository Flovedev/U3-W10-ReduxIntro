export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";
export const GET_COMPANY_JOBS = "GET_COMPANY_JOBS";
export const GET_LOADING = "GET_LOADING";
export const GET_ERROR = "GET_ERROR";

export const addToFavorites = (e) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: e,
  };
};

export const removeFromFavourites = (e) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: e,
  };
};

export const getJobs = (e) => {
  return {
    type: GET_JOBS,
    payload: e,
  };
};

export const getCompanyJobs = (e) => {
  return {
    type: GET_COMPANY_JOBS,
    payload: e,
  };
};

export const getLoading = (e) => {
  return {
    type: GET_LOADING,
    payload: e,
  };
};

export const getError = (e) => {
  return {
    type: GET_ERROR,
    payload: e,
  };
};

export const jobSearch = (query) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(getJobs(data));
        dispatch(getLoading(false));
      } else {
        dispatch(getLoading(false));
        dispatch(getError(true));
      }
    } catch (error) {
      dispatch(getLoading(false));
      dispatch(getError(true));
    }
  };
};

export const companyJobSearch = (e) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + e);
      if (response.ok) {
        const { data } = await response.json();
        dispatch(getCompanyJobs(data));
        dispatch(getLoading(false));
      } else {
        dispatch(getLoading(false));
        dispatch(getError(true));
      }
    } catch (error) {
      dispatch(getLoading(false));
      dispatch(getError(true));
    }
  };
};
