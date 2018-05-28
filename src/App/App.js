import React, { Component } from 'react';
import './App.css';

import Header from '../Header/Header';
import RepoNav from '../RepoNav/RepoNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RepoNav />
      </div>
    );
  }
}

export default App;
