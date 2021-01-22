import React, { Component } from "react";
import { Link } from "react-router-dom";
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
        <Link to='/'>
        <button className='adopt'>Return home?</button>
        </Link>
      </div>
    );
  }
}

