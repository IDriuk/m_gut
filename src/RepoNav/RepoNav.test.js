import React from 'react';
import ReactDOM from 'react-dom';
import RepoNav from './RepoNav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RepoNav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
