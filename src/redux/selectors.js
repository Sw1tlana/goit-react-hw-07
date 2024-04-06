import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading;

export const selectError = (state) => state.contacts.error;

export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
      (items, filter) => {
        if (filter && filter.trim() !== "") {
            return items.filter((contact) =>
                contact.username.toLowerCase().includes(filter.toLowerCase())
            );
        }
        return items;
    }
);