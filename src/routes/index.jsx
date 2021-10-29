import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const App = Loadable({
  loader: () => import("../App"),
  loading: () => null,
});

const Demo = Loadable({
  loader: () => import("../views/Demo"),
  loading: () => null,
});

export const routes = (
  <HashRouter>
    <App>
      <Switch>
        <Route path="/" exact component={Demo} />
      </Switch>
    </App>
  </HashRouter>
);
