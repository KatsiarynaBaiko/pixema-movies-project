import React, { FC } from "react"
import { Children, Theme } from "../../@types";
import ThemeContext from "./Context"


type ThemeProviderProps = {
    children: Children;
    themeValue: Theme;
    onChangeTheme: (value: Theme) => () => void
}

// Provider - помогает нам получить доступ к контексту
// и у него будут children
// также нужен value, в который будет приходить themeValue из пропсов 
const ThemeProvider: FC<ThemeProviderProps> = ({ children, themeValue, onChangeTheme }) => {
    return <ThemeContext.Provider value={{
        themeValue,
        onChangeTheme,
    }}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider

