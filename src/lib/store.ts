import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";
import productReducer from "./features/product/productSlice";

export const store = configureStore({
  reducer: { user: userReducer, auth: authReducer, product: productReducer },
});

// Infer the type of makeStore
export type AppStore = any;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
