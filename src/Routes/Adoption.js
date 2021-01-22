import React, { Component } from "react";
import AppContext from "../Context/context";
import CatsService from "../Services/cat-services";
import DogsService from "../Services/dog-services";
import UsersService from "../Services/user-services";
import InLine from "../Components/InLine";
import Info from "../Components/Info";
import Adopted from "../Components/Adopted";
import Queue from "../Services/queues";
import "./Adoption.css";

class Adoption extends Component {
  static contextType = AppContext;

  componentDidMount() {
    this.context.clearError();
    this.context.clearQueue();
    this.context.clearCurrentCat();
    this.context.clearCurrentDog();

    this.interval = setInterval(this.cycleList.bind(this), 15000);
    Promise.all([
      CatsService.getCat(),
      DogsService.getDog(),
      UsersService.getUsers(),
    ])
      .then((res) => {
        this.context.setCurrentCat(res[0]);
        this.context.setCurrentDog(res[1]);
        let userQueue = new Queue();
        res[2].forEach((user) => userQueue.enqueue(user));

        this.context.setQueue(userQueue);
      })
      .catch((e) => console.error(e));
  }

  cycleList = () => {
    if (this.context.userName !== this.context.queue.first.value) {
      let coin = Math.floor(Math.random() * 100);
      if (coin < 50) {
        this.handleAdoptCat();
      } else {
        this.handleAdoptDog();
      }
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderQueue() {
    return (
      <InLine
        first={this.context.queue.first.value}
        second={this.context.queue.first.next.value}
        third={this.context.queue.first.next.next.value}
      />
    );
  }

  renderCat() {
    return (
      <Info
        animal={this.context.currentCat}
        animalType={"cat"}
        handleAdoptClick={this.handleAdoptCat}
      />
    );
  }

  renderDog() {
    return (
      <Info
        animal={this.context.currentDog}
        animalType={"dog"}
        handleAdoptClick={this.handleAdoptDog}
      />
    );
  }

  handleAdoptCat = () => {
    return CatsService.deleteCat()
      .then((res) => {
        let owner = this.context.queue.requeue();
        res.owner = owner;
        this.context.setAdopted(res);
      })
      .then((res) => {
        CatsService.getCat().then((res) => this.context.setCurrentCat(res));
        this.setState({ nowAdopting: this.context.queue.first.value });
      });
  };

  handleAdoptDog = () => {
    return DogsService.deleteDog()
      .then((res) => {
        let owner = this.context.queue.requeue();
        res.owner = owner;
        this.context.setAdopted(res);
      })
      .then((res) => {
        DogsService.getDog().then((res) => this.context.setCurrentDog(res));
        this.setState({ nowAdopting: this.context.queue.first.value });
      });
  };

  render() {
    // if (this.context.queue.next === undefined) return null;
    const petAdopted = this.context.adopted.map((animal, index) => (
      <div className="adopted" key={index}>
        <Adopted
          imgSrc={animal.imageURL}
          name={animal.name}
          owner={animal.owner}
        />
      </div>
    ));

    return (
      <div className="adoption-page">
        <h1>Give Them A Home</h1>
        {this.context.queue ? this.renderQueue() : "Loading Pets! ..."}

        <div>
          <div>
            <h3>Current Cat</h3>
            {this.renderCat()}
          </div>
          <div>
            <h3>Current Dog</h3>
            {this.renderDog()}
          </div>
        </div>
        <div>
          <hr/>  
          <h3>Adopted</h3>
          {petAdopted}
        </div>
      </div>
    );
  }
}
export default Adoption;
