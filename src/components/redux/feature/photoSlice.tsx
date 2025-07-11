import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IPhotos } from "../../../types";

export interface PhotoState {
  value: IPhotos[];
}

const initialState: PhotoState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const photoSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<IPhotos>) => {
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

export const {toggleWishlist} = photoSlice.actions;

export default photoSlice.reducer;
