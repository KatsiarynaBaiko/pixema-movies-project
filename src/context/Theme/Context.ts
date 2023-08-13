import { createContext, useContext } from "react";

import { Theme } from "src/@types";


// тема по умолчанию - Light
const initialValues = {
    themeValue: Theme.Light,
    // onChangeTheme: (value: Theme) => {}
    onChangeTheme: (_: Theme) => () => {},
}

// контекст для Темы (так как есть светлая и темная темы)
// это наше хранилище
const ThemeContext = createContext(initialValues);


// функция, которая достает что-то из констекста
export const useThemeContext = () => useContext(ThemeContext);


export default ThemeContext;
