import React from 'react';
import ReactDOM from 'react-dom';
import './_index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import store from "./redux/store";
import { getDoggies } from './redux/catalogueReducer/catalogueActions'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

store.dispatch(getDoggies())

const theme = createMuiTheme({

});

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
