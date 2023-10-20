import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  deleteContactsRequest,
  getContactsRequest,
} from 'services/api';

export const getContactsThunk = createAsyncThunk(
  'getContacts',
  async (_, thunkAPI) => {
    try {
      const getContact = await getContactsRequest();
      return getContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'addContact',
  async (data, thunkAPI) => {
    try {
      const addContact = await addContactsRequest(data);
      return addContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const deleteContact = await deleteContactsRequest(id);
      return deleteContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
