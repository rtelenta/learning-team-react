import Home from "features/Home";
import Ranking from "features/Ranking";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "../features/Game";
import { routes } from "./routing";

const RootApp: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.home} component={Home} exact />
        <Route path={routes.game} component={Game} exact />
        <Route path={routes.ranking} component={Ranking} exact />
      </Switch>
    </Router>
  );
};

export default RootApp;
