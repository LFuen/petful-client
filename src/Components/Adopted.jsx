import React, { Component } from "react";
import './Adopted.css'

export default class Adopted extends Component {
  render() {
    const { imgSrc, name, owner } = this.props;

    return (
      <div className='congrats'>
        <img className='yay' src={require('../images/congrats.png')} alt='Congrats'/>
        <img className='owned' src={imgSrc} alt="pet" />
        <p><b>Pet Name: {name}</b></p>
        <p><b>Owner: {owner}</b></p>
        <p><b>Congrats on your new pal!!</b></p>
        <button type="button" onClick={() => props.reset()}>
          Return home?
        </button>
      </div>
    );
  }
}

