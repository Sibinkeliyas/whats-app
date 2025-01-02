import React, { useEffect } from "react";
import { DarkTheme, DefaultTheme, ThemeProvider as ReactThemeProvider } from "@react-navigation/native";
import { useDispatch, useSelector } from "@/store";
import { THEMES } from "@/types/enums";
import { loadTheme } from "@/store/slices/theme";
import { SplashScreen } from "expo-router";
import { Text } from "react-native";

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const { theme, loading } = useSelector((state) => state.themeReducer);

  const initialize = async () => {
    await SplashScreen.preventAutoHideAsync(); // Prevent splash screen from hiding
    await dispatch(loadTheme());
    await SplashScreen.hideAsync(); // Hide splash screen after theme is loaded
  };

  useEffect(() => {
    if (theme === THEMES.DARK) {
      document.documentElement.classList.add(THEMES.DARK);
    } else {
      document.documentElement.classList.remove(THEMES.DARK);
    }
  }, [theme]);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <ReactThemeProvider value={theme === THEMES.DARK ? DarkTheme : DefaultTheme}>
      {loading ? <Text>Loading...</Text> : children}
    </ReactThemeProvider>
  );
}

export default ThemeProvider;
