import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice.js';
import companiesReducer from './companiesSlice.js';

export default configureStore({
  reducer: {
    users: usersReducer,
    companies: companiesReducer,
  },
})
