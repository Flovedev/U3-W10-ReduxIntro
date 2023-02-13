import { GET_JOBS, GET_COMPANY_JOBS } from "../actions";

const initialState = {
  jobs: [],
  company: [],
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

    default:
      return state;
  }
};

export default jobReducer;
