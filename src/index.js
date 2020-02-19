import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Events from './Components/Events/Events'
import './scss/_base.scss'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/events" component={Events} />
    </Switch>
  </BrowserRouter>
, document.getElementById('root'))
