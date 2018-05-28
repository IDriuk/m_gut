import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import RepoNav from '../RepoNav/RepoNav';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileBio from '../ProfileBio/ProfileBio';
import Following from '../Following/Following';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RepoNav />
        <ProfileHeader />
        <ProfileBio />
        <Following />
      </div>
    );
  }
}

export default App;
