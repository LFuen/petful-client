import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Adoption from "./Routes/Adoption";
import Main from "./Routes/Main";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main" className="App-main">
          <BrowserRouter>
            <Route exact path="/" component={Main} />
            <Route exact path="/adopt" component={Adoption} />
          </BrowserRouter>
        </main>
      </div>
    );
  }
}
