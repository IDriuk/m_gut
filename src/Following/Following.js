import React, { Component } from 'react';
import './Following.css';

class Following extends Component {
  render() {
    return (
      <span className="user-following-container">
        <span className="follow">
          <a className="btn btn-block ">Follow</a>
        </span>
      </span>
    );
  }
}

export default Following;
