import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
  entities: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      const { username, ...userData } = action.payload;
      state.entities[username] = userData;
      state.ids.push(username);
    },
  },
});

export const { actions } = usersSlice;
export default usersSlice.reducer;