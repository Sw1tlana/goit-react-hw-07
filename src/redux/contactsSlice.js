
// import { createSlice } from "@reduxjs/toolkit";
// import { apiFetchContacts, addNewContact, removeContact } from "./contactsOps"; // Змінено імена екшенів тут

// export const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     items: [],
//     loading: false,
//     error: null
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(apiFetchContacts.pending, (state) => {
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(apiFetchContacts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload; 
//       })
//       .addCase(apiFetchContacts.rejected, (state) => {
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(addNewContact.pending, (state) => { // Змінено ім'я екшену тут
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(addNewContact.fulfilled, (state, action) => { // Змінено ім'я екшену тут
//         state.loading = false;
//         state.items.push(action.payload);
//       })
//       .addCase(addNewContact.rejected, (state) => { // Змінено ім'я екшену тут
//         state.loading = false;
//         state.error = true;
//       })
//       .addCase(removeContact.pending, (state) => { // Змінено ім'я екшену тут
//         state.loading = true;
//         state.error = false;
//       })
//       .addCase(removeContact.fulfilled, (state, action) => { // Змінено ім'я екшену тут
//         state.loading = false;
//         state.items = state.items.filter((contact) => contact.id !== action.payload);
//       })
//       .addCase(removeContact.rejected, (state) => { // Змінено ім'я екшену тут
//         state.loading = false;
//         state.error = true; 
//       });
//   }
// });

// export const { addContact, deleteContact, apiFetchContacts } = contactsSlice.actions;
// export const selectContacts = (state) => state.contacts.items;
// export const loading = (state) => state.contacts.loading;
// export const error = (state) => state.contacts.error;
// export const contactsReducer = contactsSlice.reducer;