import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import cartSlice from "./features/cart/CartSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
  },
});

export type State = ReturnType<typeof store.getState>;
export default store;
