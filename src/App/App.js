import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import RepoNav from '../RepoNav/RepoNav';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import ProfileBio from '../ProfileBio/ProfileBio';
import Following from '../Following/Following';
import RepoList from '../RepoList/RepoList';
import Timeline from '../Timeline/Timeline';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RepoNav />
        <ProfileHeader />
        <ProfileBio />
        <Following />

        <div className="bg-white border-top">
          <RepoList />
          <Timeline />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
