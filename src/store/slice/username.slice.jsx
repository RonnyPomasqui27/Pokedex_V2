import { createSlice } from '@reduxjs/toolkit';

export const usernameSlice = createSlice({
  name: 'username',
  initialState: '',
  reducers: {
    changeUsername: (state, action) => {
      return action.payload;
    }
  }
});

export const { changeUsername } = usernameSlice.actions;

export default usernameSlice.reducer;

