import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import authReducer from "./authSlice";

//Followed the document pdf HyperionDev - Redux on how to create and configure my redux store. Takes both slice states from cart and auth components.
const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});
export default store;
