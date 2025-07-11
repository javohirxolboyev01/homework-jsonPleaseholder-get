import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ICommets } from "../../../types";

export interface CommentState {
  value: ICommets[];
}

const initialState: CommentState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const commentSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<ICommets>) => {
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

export const {toggleWishlist} = commentSlice.actions;

export default commentSlice.reducer;
