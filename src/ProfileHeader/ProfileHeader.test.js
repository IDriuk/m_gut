import React from 'react';
import ReactDOM from 'react-dom';
import ProfileHeader from './ProfileHeader';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
