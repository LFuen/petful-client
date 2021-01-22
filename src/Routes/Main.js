import React, { Component } from "react";
import AppContext from "../Context/context";
import UsersService from "../Services/user-services";
import { Link } from "react-router-dom";
import "./Main.css";

class Main extends Component {
  render() {
    return (
      <main className="dashboard-fp">
        <div>
          <h1>Petful</h1>
          <img className='front' src={require('../images/adoptDog.png')} alt='Adopt Me'/>
          <h4>
            Join the queue, get matched with a friend. Yes, it's that easy!
          </h4>

          <h4>Let's check out pets available for adoption by clicking the button below!
          </h4>

          <Link to="/adopt">
            <button className='adopt'>Get Matched</button>{" "}
          </Link>
        </div>
      </main>
    );
  }
}
export default Main;
