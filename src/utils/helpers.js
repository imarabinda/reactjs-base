import { DARK_THEME } from "../configs/constants";
import { darkColors, getThemeLight } from "../theme/colors";

export const isProduction = ()=>{
    return process.env.NODE_ENV !== 'development';
}

export const isDevelopment = ()=>{
    return process.env.NODE_ENV === 'development';
}

export const getSystemTheme = () =>{
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export const getThemeProps = (color,addNewColors = {}) =>{
    return color === DARK_THEME ? darkColors : getThemeLight(addNewColors);
}