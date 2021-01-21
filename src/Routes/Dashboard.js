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
          <img className='front' src={require('../images/adoptDog.png')}/>
          <h4>
            Join the queue, get matched with a friend. Yes, it's that easy!
          </h4>

          <h4>Let's check out pets available for adoption by clicking the button below!
          </h4>

          <Link to="/adopt">
            <button className='adopt'>Get Matched</button>{" "}
          </Link>

          <form onSubmit={this.handleSubmit}>
            <h4>
              Or, add your name below to get added to the queue and take home a furry friend today!
            </h4>
            <input
              aria-label="name"
              type="text"
              name="name"
              id="name"
              placeholder="What's Your Name?"
              required
            />
            <br/>
            <button type="submit">Get in Line</button>
          </form>
        </div>
      </main>
    );
  }
}
export default Dashboard;
