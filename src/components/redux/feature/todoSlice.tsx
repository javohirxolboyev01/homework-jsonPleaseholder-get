import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ITodos } from "../../../types";

export interface TodoState {
  value: ITodos[];
}

const initialState: TodoState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const todoSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<ITodos>) => {
      const isExist = state.value.some((item) => item.id === action.payload.id);
      if (isExist) {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.value.push(action.payload);
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value));
    },
  },
});

export const { toggleWishlist } = todoSlice.actions;

export default todoSlice.reducer;
