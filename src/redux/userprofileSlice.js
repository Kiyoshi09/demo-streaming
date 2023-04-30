import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: '',
  profileName: '',
  isKids: false,
}

export const userprofileSlice = createSlice({
  name: 'userprofile',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setProfileName: (state, action) => {
      state.profileName = action.payload;
    },
    setIsKids: (state, action) => {
      state.isKids = action.payload;
    },
    clearUserprofile: (state, action) => {
      return {
        email: '',
        profileName: '',
        isKids: false, 
      }
    }
  }
});

export const { setEmail, setProfileName, setIsKids, clearUserprofile } = userprofileSlice.actions;
export default userprofileSlice.reducer;