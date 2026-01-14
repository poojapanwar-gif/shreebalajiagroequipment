// redux/slices/wishlist.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // this will hold wishlisted products
};

const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist: (state, action) => {
      state.items = action.payload;
    },
    toggleWishlist: (state, action) => {
      const existingIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex !== -1) {
        state.items.splice(existingIndex, 1);
      } else {
        state.items.push(action.payload);
      }
      // Save to localStorage
      localStorage.setItem("wishlist", JSON.stringify(state.items));
    },
  },
});

export const { toggleWishlist, setWishlist } = wishlist.actions;
export default wishlist.reducer;
