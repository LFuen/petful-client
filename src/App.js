import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Main from "./Routes/Main";
import Adoption from "./Routes/Adoption";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <main role="main" className="App-main">
          <BrowserRouter>
            <Route exact path="/" component={Main} />
            <Route path="/adopt" component={Adoption} />
          </BrowserRouter>
        </main>
      </div>
    );
  }
}
