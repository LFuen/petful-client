import React, { Component } from "react";
import AppContext from "../Context/context";
import './Info.css'

export default class Info extends Component {
  static contextType = AppContext;
  render() {
    const { animal, handleAdoptClick } = this.props;
    let isFirstInLine = false;
    if (this.context.queue) {
      isFirstInLine = this.context.userName === this.context.queue.first.value;
    }
    return (
      <div className="PetInfo">
        <img src={animal.imageURL} alt={animal.imageDescription} />
        <h3>Pet Name: {animal.name}</h3>
        <p>{animal.story}</p>
        <ul>
          <li>Gender: {animal.gender}</li>
          <li>Age: {animal.age}</li>
          <li>Breed: {animal.breed}</li>
          <li>Description: {animal.description}</li>
        </ul>
        <button
          type="button"
          onClick={handleAdoptClick}
          disabled={!isFirstInLine}
        >
          Adopt
        </button>
      </div>
    );
  }
}
