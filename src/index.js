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
  constructor(props) {
    super(props);

    this.state = {
      events: [],
      contacts: []
    };
  }

  async componentDidMount() {
    await this.eventGenerator();
    await this.contactGenerator();
    document.getElementById("root-loader").style.display = "none";
  }

  async eventGenerator() {
    const url = "https://yashshah2820.pythonanywhere.com/events/events/";
    await fetch(url)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(data => {
        this.setState({ events: data });
      })
      .catch(console.log);
  }

  async contactGenerator() {
    const url = "https://yashshah2820.pythonanywhere.com/events/contact/";
    await fetch(url)
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
      })
      .then(data => {
        this.setState({ contacts: data });
      })
      .catch(console.log);
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/events"
          render={props => (
            <Events events={this.state.events} contacts={this.state.contacts} />
          )}
        />
        <Route path="/team" component={Team} />
        <Route
          path="/timeline"
          render={props => <Timeline events={this.state.events} />}
        />
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
