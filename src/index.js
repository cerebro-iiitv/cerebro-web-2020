import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Timeline from "./Components/Timeline/Timeline";
import "./scss/_base.scss";
import "./fonts.css";
import Team from "./Components/Team/Team";
import Events from "./Components/Events/Events";
class App extends React.Component {
  componentDidMount() {

    document.getElementById("root-loader").style.display = "none";
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/events" render={props => <Events {...props} events={this.state.events} />} />
        <Route path="/team" component={Team} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
