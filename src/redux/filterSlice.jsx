import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  status: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// =======================================================================================

// import { createSlice } from '@reduxjs/toolkit';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     setFilter: (state, action) => {
//       const { filter } = action.payload;
//       state.filter = filter;
//     },
//   },
// });

// export default filterSlice.reducer;
// export const { setFilter } = filterSlice.actions;

// =======================================================================================

// import { createSlice } from '@reduxjs/toolkit';

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState: '',
//   reducers: {
//     setFilter: (state, action) => action.payload,
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export default filterSlice.reducer;

// =======================================================================================
