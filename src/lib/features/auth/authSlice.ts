import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
interface AuthState {
  isAuthenticated:boolean;
}

const initialState: AuthState = {
    isAuthenticated:false
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
