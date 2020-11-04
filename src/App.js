import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { HeaderPage } from './components';
import routes from './config/routes';

const App = () => {
  return (
    <BrowserRouter>
      <HeaderPage/>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
            path={route.path}
            component={route.component}
            key={route.path}
          />
        );
      })}
    </Switch>
    </BrowserRouter>
  );
}

export default App;
