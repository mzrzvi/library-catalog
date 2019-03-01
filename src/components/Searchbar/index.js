import React from 'react';

const Searchbar = ({ searchFunc }) => (
  <input
    style={{ width: '100%' }}
    onChange={(e) => searchFunc(e.target.value)}
    placeholder='Search Books'
  />
);

export default Searchbar;
