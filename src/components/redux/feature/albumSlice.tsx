import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IAlbums } from "../../../types";

export interface AlbumState {
  value: IAlbums[];
}

const initialState: AlbumState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const albumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<IAlbums>) => {
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

export const { toggleWishlist } = albumSlice.actions;

export default albumSlice.reducer;
