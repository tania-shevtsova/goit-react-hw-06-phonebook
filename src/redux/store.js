import {createStore} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {contacts} from './contactReducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const rootReducer={
//     contacts
// }



const persistConfig = {
    key: "root",
    storage,
    whitelist: ["contacts"]
  };
  
  const persistedReducer = persistReducer(persistConfig, contacts);
  
  export const store = createStore(persistedReducer, devToolsEnhancer());
  export const persistor = persistStore(store);