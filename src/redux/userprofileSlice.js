import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: '',
  email: '',
  profileName: '',
  isKids: false,
}

export const userprofileSlice = createSlice({
  name: 'userprofile',
  initialState,
  reducers: {
    setProfileId: (state, action) => {
      state.id = action.payload;
    },
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
        id: '',
        email: '',
        profileName: '',
        isKids: false, 
      }
    }
  }
});

export const { setEmail, setProfileId, setProfileName, setIsKids, clearUserprofile } = userprofileSlice.actions;
export default userprofileSlice.reducer;