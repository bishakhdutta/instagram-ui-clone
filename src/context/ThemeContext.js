import { createContext, useState, useContext } from "react";

const Theme = createContext(null);
export function ThemeContext({children}){
    const [theme,setTheme]=useState("light");
    return(
        <Theme.Provider value={[theme,setTheme]}>
            {children}
        </Theme.Provider>
    );
}
export default function ThemeSet() {
    return useContext(Theme)
}