import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  deleteContactsRequest,
  getContactsRequest,
} from 'services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const getContacts = await getContactsRequest();
      return getContacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const contactAdd = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const addContact = await addContactsRequest(newContact);
      return addContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const contactDelete = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const deleteContact = await deleteContactsRequest(contactId);
      return deleteContact;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(contactAdd.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(contactAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        const { id, name, number } = action.payload;
        state.contacts.items = [...state.contacts.items, { id, name, number }];
      })
      .addCase(contactAdd.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(contactDelete.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(contactDelete.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(contactDelete.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
});

export const { addContact, deleteContact, changeFilter } =
  phoneBookSlice.actions;

export const phoneBookReducer = phoneBookSlice.reducer;
