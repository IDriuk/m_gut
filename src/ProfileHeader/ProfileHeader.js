import React, { Component } from 'react';
import './ProfileHeader.css';

class ProfileHeader extends Component {
  render() {
    return (
      <div className="profile-header">
        <a>
          <img
            className="avatar avatar"
            width="110"
            height="110"
            src="https://avatars1.githubusercontent.com/u/8888039?s=220&v=4"
            alt="avatar"
          />
        </a>
        <h1>Ivan Driuk</h1>
        <h3>IDriuk</h3>
        <ul className="details">
          <li className="details-item">
            <svg className="octicon octicon-location" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true">
              <path fillRule="evenodd" d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"></path>
            </svg>&shy;
            Poltava, Ukraine
          </li>
        </ul>
      </div>
    );
  }
}

export default ProfileHeader;
