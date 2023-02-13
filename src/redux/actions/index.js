export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

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

export const jobSearch = (query) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(getJobs(data));
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
