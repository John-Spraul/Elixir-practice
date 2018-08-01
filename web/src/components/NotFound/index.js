// @flow
import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <div style={{ margin: '2rem auto', textAlign: 'center' }}>
      <p>Page not found</p>
      <p><Link to="/">Go to the Home page →</Link></p>
    </div>
  );
};

export default NotFound;
