import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
interface UserState {
  isAuthenticated: boolean;
  user: {
    name: string;
    email: string;
    avatar?:
      | {
          public_id?: string | undefined;
          url?: string | undefined;
        }
      | undefined;
    role: string;
  };
}

const initialState: UserState = {
  isAuthenticated: false,
  user: {
    name: "",
    email: "",
    avatar: {
      public_id: "",
      url: "",
    },
    role: "",
  },
} as UserState;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthenticated: (state, action: PayloadAction<UserState>) => {
      console.log("🚀 ~ action:", action.payload);
      state.isAuthenticated = true;
      state.user.name = action.payload.user.name;
      state.user.email = action.payload.user.email;
      state.user.role = action.payload.user.role;
      if (action.payload.user.avatar) {
        state.user.avatar = {
          public_id: action.payload.user.avatar.public_id,
          url: action.payload.user.avatar.url,
        };
      } else {
        // If avatar is undefined, set it to an empty object
        state.user.avatar = {
          public_id: "",
          url: "",
        };
      }
    },
  },
});

export const { setAuthenticated } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
