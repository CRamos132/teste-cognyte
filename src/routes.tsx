import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import MainForm from "./pages/MainForm";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/form" component={MainForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
