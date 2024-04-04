import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../services/api";

import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${API_ENDPOINT}/api/contacts`);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
   });

export const addNewContact = createAsyncThunk( // Перейменовано з addContact на addNewContact
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post(`${API_ENDPOINT}/api/contacts`, newContact);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const removeContact = createAsyncThunk( // Перейменовано з deleteContact на removeContact
        "contacts/deleteContact",
        async (contactId, thunkAPI) => {
            try {
                const response = await axios.delete(`${API_ENDPOINT}/api/contacts/${contactId}`);
                return response.data;
            }catch(error) {
                return thunkAPI.rejectWithValue(error.message); 
            }
    });