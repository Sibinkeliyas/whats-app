// types
import { ThemeProps } from "@/types";
import { IAuthProps } from "@/types/auth";
import { THEMES } from "@/types/enums";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState: IAuthProps = {
  isLoggedIn: false,
  isInitialized: false,
  user: null,
};

// ==============================|| AUTH ||============================== //

const theme = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoginSuccess: (state, action) => {
      state.user = action.payload;
      state.isInitialized = true;
      state.isLoggedIn = true;
    },
  },
});

export default theme.reducer;

export const { userLoginSuccess } = theme.actions;
