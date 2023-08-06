import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.data.id === newItem.data.id);
      if (existingItem) {
        existingItem.data.amount++;
      } else {
        state.items.push(newItem);
      }
    },
    removeItem: (state, action) => {
      const itemID = action.payload.data.id;
      const updatedItems = state.items.filter(item => item.data.id !== itemID);
      state.items = updatedItems;
    },
    incrementItem: (state, action) => {
      const itemID = action.payload.data.id;
      const selectedItem = state.items.find(item => item.data.id === itemID);
      
      if (selectedItem) {
        selectedItem.data.amount++;
      }
    },
    
    decrementItem: (state, action) => {
      const itemID = action.payload.data.id;
      const selectedItem = state.items.find(item => item.data.id === itemID);
      
      if (selectedItem) {
        if (selectedItem.data.amount > 1) {
          selectedItem.data.amount--;
        } else {
          const updatedItems = state.items.filter(item => item.data.id !== itemID);
          state.items = updatedItems;
        }
      }
    },
    
  },
});

export const { addItem, removeItem, incrementItem, decrementItem } =
  cartSlice.actions;
export default cartSlice.reducer;
