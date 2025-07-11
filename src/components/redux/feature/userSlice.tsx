import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUsers } from "../../../types";

export interface UserState {
  value: IUsers[];
}

const initialState: UserState = {
  value: JSON.parse(localStorage.getItem("wishlist") || "[]"),
};

export const userSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action: PayloadAction<IUsers>) => {
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

export const { toggleWishlist } = userSlice.actions;

export default userSlice.reducer;
