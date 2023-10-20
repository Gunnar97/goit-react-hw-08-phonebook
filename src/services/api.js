import axios from 'axios';

const $instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const setToken = token => {
  $instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  $instance.defaults.headers.Authorization = '';
};

export const registerRequest = async formData => {
  const { data } = await $instance.post('/users/signup', formData);
  return data;
};

export const loginRequest = async formData => {
  const { data } = await $instance.post('/users/login', formData);
  return data;
};

export const logoutRequest = async () => {
  const { data } = await $instance.post('/users/logout');
  return data;
};

export const currentUserRequest = async () => {
  const { data } = await $instance.get('/users/current');
  return data;
};

export const getContactsRequest = async () => {
  const { data } = await $instance.get('/contacts');
  return data;
};

export const addContactsRequest = async formData => {
  const { data } = await $instance.post('/contacts', formData);
  return data;
};

export const deleteContactsRequest = async contactId => {
  const { data } = await $instance.delete(`/contacts/${contactId}`);
  return data;
};
