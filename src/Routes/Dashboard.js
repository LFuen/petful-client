import React, { Component } from "react";
import AppContext from "../Context/context";
import UsersService from "../Services/user-services";
import { Link } from "react-router-dom";
import "./Dashboard.css";

class Dashboard extends Component {
  static contextType = AppContext;

  handleSubmit = (event) => {
    event.preventDefault();
    this.context.clearError();
    this.context.clearUserName();
    let name = document.getElementById("name").value;
    this.context.setUserName(name);

    return UsersService.postUser(name).then((results) => {
      const { location, history } = this.props;
      const destination = (location.state || {}).from || "/adopt";
      history.push(destination);
    });
  };

  render() {
    return (
      <main className="dashboard-fp">
        <div>
          <h1>Petful</h1>

          <h4>
            Here at Petful, we work to match the first person in the adoption
            queue to the first pet that arrived at the shelter so no pets are
            left behind.
          </h4>

          <h4>While this crazy, archaic way of adoption would never be established in real life (or at least we hope),
              take a stroll down pretend-land with us and check out the stock images of pets by clicking the button below!
          </h4>

          <Link to="/adopt">
            <button>Preview Adoptable Pets</button>{" "}
          </Link>

          <form onSubmit={this.handleSubmit}>
            <h4>
              Or, add your name below to get added to the queue and take home a
              stock image of a furry friend today!
            </h4>
            <input
              aria-label="name"
              type="text"
              name="name"
              id="name"
              placeholder="Name..."
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    );
  }
}
export default Dashboard;
