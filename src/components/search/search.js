import React, { useEffect, useState } from 'react';
import SearchList from './search-list.js';

import './search.css'
function Search({ data }) {

  const [searchField, setSearchField] = useState("");
  const [filteredCards, setFilteredCards] = useState(''); 

  useEffect(() => {
    setFilteredCards(() => {
      if (searchField.length === 0) {
        return data;
      } else  {
        return data.filter((el) => el.title.toLowerCase().includes(searchField.toLowerCase()))
      }
    })
  }, [searchField, data]);
  

  return (
    <section className="search">
      <div className="search-input-wrapper">
        <input 
          className="search-input"
          type = "search" 
          placeholder = "Search News" 
          onChange = {(e) => {setSearchField(e.target.value)}}
          value={searchField}
        />
      </div>
      <SearchList filteredCards={filteredCards} />
    </section>
  );
}

export default Search;