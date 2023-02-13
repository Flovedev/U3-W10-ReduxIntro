import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobReducer from "../reducers/jobSearchReducer";

const store = configureStore({
  reducer: combineReducers({
    favourite: favouriteReducer,
    search: jobReducer,
  }),
});

export default store;
