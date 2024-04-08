import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cartType, stateProp } from "../../types";
import { State } from "../../store";
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

    removeItem(state, action) {
      state.cart = state.cart.filter((item) => action.payload != item.pizzaId);
    },
    increaseQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item ? item.quantity++ : item;

      item ? (item.totalPrice = item.unitPrice * item.quantity) : item;
    },
    decreaseQty(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item ? item.quantity-- : item;

      item ? (item.totalPrice = item.unitPrice * item.quantity) : item;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const getTotalPrice = (state: State) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCart = (state: State) => state.cart.cart;
export const getQuantity = (state: State) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCartQuantityById = (id: number) => (state: State) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export const { addItem, removeItem, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
