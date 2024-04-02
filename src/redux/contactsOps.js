// import { createAsyncThunk } from "@reduxjs/toolkit";
// // import axios from "axios";

// export const fetchContacts = createAsyncThunk(
//     "contacts/fetchAll",
//     async (contactId, thunkAPI) => {
//         try {
//             const data = requestContactsById(contactId);
//             return data;
//         } catch(error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }

//         // extraReducers: builder => {
//         //     builder
//         //       .addCase(fetchTasks.pending, (state, action) => {

//         //       })
//         //       .addCase(fetchTasks.fulfilled, (state, action) => {})
//         //       .addCase(fetchTasks.rejected, (state, action) => {});
//         //   },
//    });