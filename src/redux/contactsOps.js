import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6607e98da2a5dd477b13abca.mockapi.io";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            console.log("Delete contact response data:", response.data);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
   });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', newContact);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContact = createAsyncThunk( 
        "contacts/deleteContact",
        async (contactId, thunkAPI) => {
            try {
                const response = await axios.delete(`/contacts/${contactId}`);
                 console.log("Delete contact response:", response);
                return response.data;
            }catch(error) {
                return thunkAPI.rejectWithValue(error.message); 
            }
    });