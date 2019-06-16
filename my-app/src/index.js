import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { TableGeneric } from "./screen/TableGeneric";
import { FormGeneric } from "./screen/FormGeneric";
import * as serviceWorker from "./serviceWorker";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={App} />
      <Route path="/table" component={TableGeneric} />
      <Route path="/form" component={FormGeneric} />
    </Route>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
