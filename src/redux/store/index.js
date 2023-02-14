import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteReducer from "../reducers/favouriteReducer";
import jobReducer from "../reducers/jobSearchReducer";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  storage: localStorage,
  key: "root",
  transform: [
    encryptTransform({
      // secretkey: process.env.REACT_APP_ENV_SECRET_KEY,
      secretKey: process.env.REACT_APP_ENV_SECRET_KEY,
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
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      // this shuts off the checking of non-serializable values in actions
    });
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };
