import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

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
