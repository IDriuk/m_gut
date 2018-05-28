import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import RepoNav from '../RepoNav/RepoNav';
import ProfileHeader from '../ProfileHeader/ProfileHeader';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RepoNav />
        <ProfileHeader />
      </div>
    );
  }
}

export default App;
