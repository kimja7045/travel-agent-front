import { useColorScheme } from "@shared/hooks/useColorScheme";

export const useDarkMode = () => {
  return useColorScheme() === "dark";
};
