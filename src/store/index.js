import { configureStore } from "@reduxjs/toolkit";
import fruitsReducer from "./fruitsSlice";
import cartReducer from "./cartSlice";

export default configureStore({
  reducer: {
    fruits: fruitsReducer,
    cart: cartReducer,
  },
});
