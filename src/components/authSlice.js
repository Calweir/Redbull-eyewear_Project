import { createSlice } from "@reduxjs/toolkit";

//used redux and created an initial state for the user and an authentication process.
const initialState = {
  isAuthenticated: false,
  user: null,
};
//created a slice that creates a piece of state used within our store component.
//Followed hyperionDev document Redux on how exactly to code this method.
const authSlice = createSlice({
  name: "auth",
  initialState,
  //Delcared my reducers - which login will change the state to true once a user is able to login by using action.paylod
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    //Once user logout the state is returned to false removing the user from the state so there name does not display in the navigation component anymore.
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
