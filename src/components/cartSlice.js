import { createSlice } from "@reduxjs/toolkit";

//Initialised both an empty array for the items that will be pushed to shopping cart and the price to set to zero originally.
const initialState = {
  cartItems: [],
  totalPrice: 0,
};

//Again used method slice to create my reducers actions. Followed HyperionDev document Redux for the syntax of this method.
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //Reducer below is used to update what product is pushed into the shopping cart component and to update the total price that will be displayed with an action statement.
    addItemToCart(state, action) {
      state.cartItems.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    //Reducer is used so if a user wants to remove an item from there shopping cart. Uses the findIndex function with the items id number which then results in an action taking place and updating the state.
    removeItemFromCart(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      );
      if (index !== -1) {
        state.totalPrice -= state.cartItems[index].price;
        state.cartItems.splice(index, 1);
      }
    },
  },
});
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
