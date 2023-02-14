import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobReducer from "../reducers/jobSearchReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  store: localStorage,
  key: "root",
  transform: [
    encryptTransform({
      // secretkey: process.env.REACT_APP_ENV_SECRET_KEY,
      secretKey: "Flo_test",
    }),
  ],
};

const combinedReducer = combineReducers({
  favourite: favouriteReducer,
  search: jobReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistedStore = persistStore(store);

export { store, persistedStore };
