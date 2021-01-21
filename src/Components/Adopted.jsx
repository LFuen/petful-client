import React, { Component } from "react";

export default class Adopted extends Component {
  render() {
    const { imgSrc, name, owner } = this.props;

    return (
      <>
        <img src={imgSrc} alt="pet" />
        <p>Pet Name: {name}</p>
        <p>Owner: {owner}</p>
      </>
    );
  }
}
