import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINT } from "../services/api";

import axios from "axios";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${API_ENDPOINT}`);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
   });

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post(`${API_ENDPOINT}`, newContact);
            return response.data;
        } catch(error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

export const deleteContact = createAsyncThunk( 
        "contacts/deleteContact",
        async (contactId, thunkAPI) => {
            try {
                const response = await axios.delete(`${API_ENDPOINT}` + contactId);
                return response.data;
            }catch(error) {
                return thunkAPI.rejectWithValue(error.message); 
            }
    });