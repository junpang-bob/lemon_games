import { Context, createContext } from "react";

export const ThemeContext: Context<string> = createContext('light');
export const SetThemeContext: any = createContext(null);
