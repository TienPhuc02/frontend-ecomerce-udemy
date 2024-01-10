import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
interface UserState {
  isAuthenticated: boolean;
  name: string;
  email: string;
  avatar: {
    public_id: string;
    url: string;
  };
  role: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  name: "",
  email: "",
  avatar: {
    public_id: "",
    url: "",
  },
  role: "",
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
