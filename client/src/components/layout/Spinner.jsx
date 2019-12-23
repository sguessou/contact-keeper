import React from 'react';
import spinner from './tenor.gif';

export default () => (
  <>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt="Loading..."
    />
  </>
);
