import React, { Component } from "react";
import './InLine.css'

export default class InLine extends Component {
  render() {
    return (
      <div className="queue-card">
        <ul>
          <h2>User Queue</h2>
          <li>{this.props.first}</li>
          <li>{this.props.second}</li>
          <li>{this.props.third}</li>
        </ul>
      </div>
    );
  }
}
