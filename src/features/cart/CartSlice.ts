import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartType, stateProp } from "../../types";
// import { cartType } from "../../types";

const initialState: stateProp = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<cartType>) {
      state.cart.push(action.payload);
    },

    // removeItem(state, action) {
    //   state.cart = state.cart.filter((item) => action.payload != item);
    // },
    // increaseQty(state, action) {
    //   const item = state.cart.find((item) => item.pizzaId === action.payload);

    //   item ? item.quantity++ : item;

    //   item ? (item.totalPrice = item.unitPrice * item.quantity) : item;
    // },
    // decreaseQty(state, action) {
    //   const item = state.cart.find((item) => item.pizzaId === action.payload);

    //   item ? item.quantity-- : item;

    //   item ? (item.totalPrice = item.unitPrice * item.quantity) : item;
    // },
    // clearCart(state) {
    //   state.cart = [];
    // },
  },
});

// , removeItem, increaseQty, decreaseQty, clearCart
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
