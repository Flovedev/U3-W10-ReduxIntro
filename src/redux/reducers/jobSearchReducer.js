import { GET_JOBS, GET_COMPANY_JOBS, GET_LOADING, GET_ERROR } from "../actions";

const initialState = {
  jobs: [],
  company: [],
  isLoading: true,
  isError: false,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };

    case GET_COMPANY_JOBS:
      return {
        ...state,
        company: [...state.company, action.payload],
      };

    case GET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };

    case GET_ERROR:
      return {
        ...state,
        isError: action.payload,
      };

    default:
      return state;
  }
};

export default jobReducer;
