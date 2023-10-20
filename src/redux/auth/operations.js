import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  clearToken,
  currentUserRequest,
  loginRequest,
  logoutRequest,
  registerRequest,
  setToken,
} from 'services/api';

export const registerThunk = createAsyncThunk(
  'register',
  async (credentials, thunkAPI) => {
    try {
      const register = await registerRequest(credentials);
      setToken(register.token);
      toast.success('Congratulations! You have successfully registered!');
      return register;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credentials, thunkAPI) => {
    try {
      const login = await loginRequest(credentials);
      setToken(login.token);
      toast.success('You have successfully logged in!');
      return login;
    } catch (error) {
      toast.error('Incorrect email or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkAPI) => {
  try {
    const logout = await logoutRequest();
    clearToken();
    return logout;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk('refresh', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().auth.token;

  if (!savedToken) return thunkAPI.rejectWithValue('You need log in!');

  try {
    setToken(savedToken);
    const currentUser = await currentUserRequest();
    return currentUser;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
