import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';






const  App = () => {
  return (
    <ThemeProvider theme={theme}>
       <Router/>
       
    </ThemeProvider>
  );
}

export default App;
