import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: {},
  },
  reducers: {
    increment: (state, data) => {
      let articul = data.payload;
      if (state.cart[articul] === undefined) state.cart[articul] = 0;
      state.cart[articul]++;
    },
    minus: (state, data) => {
      if (state.cart[data.payload] !== undefined) state.cart[data.payload]--;
      if (state.cart[data.payload] === 0) {
        delete state.cart[data.payload];
      }
    },
    remove: (state, data) => {
      delete state.cart[data.payload];
    },
  },
});

export const { increment, minus, remove } = cartSlice.actions;
export const selectCart = (state) => state.cart.cart;
export default cartSlice.reducer;
