import { createSlice } from "@reduxjs/toolkit";

// 🧠 Load initial compare list from localStorage
const getInitialCompareList = () => {
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem("compareList");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Failed to load compareList from localStorage:", err);
    }
  }
  return [];
};

const initialState = {
  items: getInitialCompareList(), // 👈 pre-load here
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompare: (state, action) => {
      if (state.items.length >= 4) return;
      const exists = state.items.find((item) => item._id === action.payload._id);
      if (!exists) {
        state.items.push(action.payload);
        localStorage.setItem("compareList", JSON.stringify(state.items)); // 🔄 update
      }
    },
    removeFromCompare: (state, action) => {
      state.items = state.items.filter((item) => item._id !== action.payload._id);
      localStorage.setItem("compareList", JSON.stringify(state.items)); // 🔄 update
    },
    clearCompare: (state) => {
      state.items = [];
      localStorage.setItem("compareList", "[]"); // 🔄 update
    },
    setCompare: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("compareList", JSON.stringify(state.items)); // 🔄 update
    },
  },
});

export const {
  addToCompare,
  removeFromCompare,
  clearCompare,
  setCompare,
} = compareSlice.actions;

export default compareSlice.reducer;
