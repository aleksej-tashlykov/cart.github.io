import { createSlice } from "@reduxjs/toolkit";
import fruitsList from "../data/fruits.json";

export const fruitsSlice = createSlice({
  name: "fruits",
  initialState: {
    fruits: fruitsList,
  },
  reducers: {},
});

export const {} = fruitsSlice.actions;
export const selectFruits = (state) => state.fruits.fruits;
export default fruitsSlice.reducer;
