import React from 'react';

import Searchbar from '../Searchbar';
import GenreFilterList from '../GenreFilterList';
import AuthorFilterList from '../AuthorFilterList';

const Sidebar = ({ filterFunc, clearFunc, genres, authors, genreCounter, authorCounter }) => (
  <div style={{ padding: 20 }}>
    <button onClick={clearFunc}>Clear filters</button>
    <br/><br/>
    <Searchbar searchFunc={(search) => filterFunc('search', search)}/>
    <br/><br/>
    <span style={{ textAlign: 'left' }}>Filter By Genre</span>
    <GenreFilterList filterFunc={filterFunc} items={genres} counter={genreCounter}/>
    <br/>
    <span style={{ textAlign: 'left' }}>Filter By Author</span>
    <AuthorFilterList filterFunc={filterFunc} items={authors} counter={authorCounter}/>
  </div>
);

export default Sidebar;
