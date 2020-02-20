import { configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import { contacts } from "./contactReducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"]
};

const persistedReducer = persistReducer(persistConfig, contacts);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});
export const persistor = persistStore(store);
