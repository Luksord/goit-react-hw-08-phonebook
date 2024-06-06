import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;

// =======================================================================================

// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const loadLocalStorage = () => {
//   const lsData = localStorage.getItem('contactList');
//   if (lsData) {
//     return JSON.parse(lsData);
//   } else {
//     return [
//       {
//         id: 'id-1',
//         name: 'Rosie Simpson',
//         number: '459-12-56',
//       },
//       {
//         id: 'id-2',
//         name: 'Hermione Kline',
//         number: '443-89-12',
//       },
//       {
//         id: 'id-3',
//         name: 'Eden Clements',
//         number: '645-17-79',
//       },
//       {
//         id: 'id-4',
//         name: 'Annie Copeland',
//         number: '227-91-26',
//       },
//     ];
//   }
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: loadLocalStorage(),
//     filter: '',
//   },
//   reducers: {
//     addContact: (state, action) => {
//       const id = nanoid();
//       const name = action.payload.name;
//       const number = action.payload.number;
//       const contactList = [...state.contacts];

//       if (contactList.findIndex(contact => name === contact.name) !== -1) {
//         alert(`${name} is already in contacts.`);
//       } else {
//         contactList.push({ name, id, number });
//       }
//       state.contacts = contactList;
//     },
//     deleteContact: (state, action) => {
//       const { id } = action.payload;
//       state.contacts = state.contacts.filter(contact => contact.id !== id);
//     },
//   },
// });

// export default contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;

// =======================================================================================

// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteContact: (state, action) => {
//       return state.filter(contact => contact.id !== action.payload);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;

// =======================================================================================
