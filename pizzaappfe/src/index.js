import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Register from './components/Register';
import Login from './components/Login';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
