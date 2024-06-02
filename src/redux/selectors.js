import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.status;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

// =======================================================================================

// export const selectContacts = state => state.contactsSlice;

// export const selectFilters = state => state.filterSlice;

// export const selectIsLoading = state => state.contacts.isLoading;

// export const selectError = state => state.contacts.error;
