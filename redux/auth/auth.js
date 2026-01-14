import { createSlice } from "@reduxjs/toolkit";

let initialAuthState = {
  isLoggedIn: false,
  token: null,
  user: [],
};

// Check if running on the client
if (typeof window !== "undefined") {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "[]");

  initialAuthState = {
    isLoggedIn,
    token,
    user,
  };
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.user = [];
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
