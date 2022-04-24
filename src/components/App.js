import React from 'react';
import Router from './../routers/Router';
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from './../contexts/ThemeProvider';
import { connect } from 'react-redux';
import { themeSelector } from '../modules/common/selectors';
import { getSystemTheme, getThemeProps } from '../utils/helpers';
import { SYSTEM_DEFAULT } from '../configs/constants';

const themeConfigure = (theme) =>{
    let mode = theme === SYSTEM_DEFAULT ? getSystemTheme() : theme;
    return getThemeProps(mode);
}


function App(props){

  const theme = themeConfigure(props.theme);
  document.body.style.backgroundColor = theme.colors.bgColor;
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

const mapStateToProps = state =>{
  return {
    theme:themeSelector(state)
  }
}

export default connect(mapStateToProps)(App);