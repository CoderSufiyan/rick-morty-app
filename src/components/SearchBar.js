import React from 'react';

const SearchBar = ({ setSearchTerm }) => {
  return (
    <input
      type="text"
      placeholder="Search character by name"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
