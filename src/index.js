import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
// import MuiThemeProvider from '@material-ui/core/styles';

import mainView from './components/main_view'
import './index.css';
import reducer from './reducers';

import * as serviceWorker from './serviceWorker';


const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={mainView} />
        </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
