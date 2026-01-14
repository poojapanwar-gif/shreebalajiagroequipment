import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth";
import cartReducer from "./cart/cart"
import wishlistReducer from "./wishlist/wishlist"
import compareReducer from "./compare-products/compare"
const store = configureStore({
  reducer: {
    
    auth:authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    compare: compareReducer
  },
});

export default store;
