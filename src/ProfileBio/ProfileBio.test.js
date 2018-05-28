import React from 'react';
import ReactDOM from 'react-dom';
import ProfileBio from './ProfileBio';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileBio />, div);
  ReactDOM.unmountComponentAtNode(div);
});
