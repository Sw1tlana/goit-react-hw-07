// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts, addContact, deleteContact } from "./contactsOps";

// const handlePending = state => {
//   state.loading = true;
// };

// const handleRejected = (state, action) => {
//   state.error = action.payload;
// }

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: { 
//     items: [],
//     loading: false,
//     error: null
//   },
  
//   reducers: {},

//   extraReducers: (builder) => {
//     builder
//     .addCase(fetchContacts.pending, handlePending)
//     .addCase(fetchContacts.fulfilled, (state, action) => {
//       state.loading = true;
//       state.error = null;
//       state.items = action.payload;
//     })

//     .addCase(fetchContacts.rejected, handleRejected)
//     // .addCase(addContact.pending, handlePending)
//     .addCase(addContact.fulfilled, (state, action) => {
//       state.loading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     })

//     // .addCase(addContact.rejected, handleRejected)
//     .addCase(deleteContact.pending, handlePending)
//     .addCase(deleteContact.fulfilled, (state, action) => {
//       state.loading = false;
//       state.error = null;
//       state.items = state.items.filter((contact) => contact.id !== action.payload);
//     })
//     .addCase(deleteContact.rejected, handleRejected);
//   }
// });

// export const { addContact } = contactsSlice.actions;
// export const selectContacts = (state) => state.contacts.items;
// export const loading = (state) => state.contacts.loading;
// export const error = (state) => state.contacts.error;
// export const contactsReducer = contactsSlice.reducer;