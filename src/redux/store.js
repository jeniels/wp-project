import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import toggleCartSlice from "./toggleCartSlice";

const store = configureStore({
  reducer: {
    toggleCart: toggleCartSlice,
    cart: cartSlice,
  },
});

export default store;
