import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Routes/Main";
import AdoptionPage from "./Routes/Adoption";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main" className="App-main">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/adopt" component={AdoptionPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
