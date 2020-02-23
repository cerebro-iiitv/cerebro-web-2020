import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./scss/_base.scss";
import Team from "./Components/Team/Team";
import Events from "./Components/Events/Events";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/team" component={Team} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
