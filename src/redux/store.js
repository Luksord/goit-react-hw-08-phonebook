import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// =======================================================================================

// import { configureStore } from '@reduxjs/toolkit';
// import contactsSlice from './contactsSlice';
// import filterSlice from './filterSlice';
// import { combineReducers } from 'redux';

// const reducers = combineReducers({
//   contactsSlice,
//   filterSlice,
// });
// export const store = configureStore({
//   reducer: reducers,
// });

// =======================================================================================

// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contactsSlice';
// import filterReducer from './filterSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
// });

// export default store;

// =======================================================================================
