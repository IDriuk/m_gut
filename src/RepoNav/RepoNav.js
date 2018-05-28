import React, { Component } from 'react';
import './RepoNav.css';

class RepoNav extends Component {
  render() {
    return (
      <div className="reponav-wrapper lh-default">
        <nav className="reponav">
          <a className="reponav-item selected">
            <span>Overview</span>&nbsp;
          </a>
          <a className="reponav-item">
            <span>Repositories</span>&nbsp;
            <span className="Counter">16</span>&nbsp;
          </a>
          <a className="reponav-item">
            <span>Stars</span>&nbsp;
            <span className="Counter">7</span>&nbsp;
          </a>
          <a className="reponav-item">
            <span>Followers</span>&nbsp;
            <span className="Counter">7</span>&nbsp;
          </a>
          <a className="reponav-item">
            <span>Following</span>&nbsp;
            <span className="Counter">2</span>&nbsp;
          </a>
        </nav>
      </div>
    );
  }
}

export default RepoNav;
