import { createSlice } from "@reduxjs/toolkit";

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState: {
    isOpenCart: false,
  },
  reducers: {
    toggle: (state) => {
      state.isOpenCart = !state.isOpenCart;
    },
    closeCart: (state) => {
      state.isOpenCart = false;
    },
  },
});

export const { toggle, closeCart } = toggleCartSlice.actions;
export default toggleCartSlice.reducer;
