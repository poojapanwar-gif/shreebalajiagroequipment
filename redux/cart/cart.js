import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: typeof window !== "undefined" && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const item = state.items.find((item) => item._id === _id);
      if (item) {
        item.quantity = quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {

      state.items = state.items.filter((item) => item._id !== action.payload);
      console.log(state.items)
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } = cart.actions;
export default cart.reducer;
