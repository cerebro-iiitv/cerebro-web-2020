<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Events from "./Components/Events/Events";
import "./scss/_base.scss";
=======
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import './scss/_base.scss'
import Team from './Components/Team/Team'
>>>>>>> 7160a3cc7c09292f32b6acedf9c11eb7008cf65f

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
<<<<<<< HEAD
      <Route exact path="/events" component={Events} />
=======
      <Route path="/team" component={Team} />
>>>>>>> 7160a3cc7c09292f32b6acedf9c11eb7008cf65f
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
