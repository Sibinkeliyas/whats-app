// types
import { ThemeProps } from "@/types";
import { THEMES } from "@/types/enums";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState: ThemeProps = {
  theme: "light",
  loading: true,
};

// ==============================|| THEME ||============================== //

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme(state, action) {
      setLocalStorage("theme", action.payload);
      state.theme = action.payload;
      state.loading = false;
    },
  },
});

export const loadTheme = () => async (dispatch: any) => {
  try {
    const storedTheme = await getLocalStorage("theme");
    dispatch(switchTheme(storedTheme ?? "light"));
  } catch (error) {
    dispatch(switchTheme("light"));
  }
};

export default theme.reducer;

export const { switchTheme } = theme.actions;
