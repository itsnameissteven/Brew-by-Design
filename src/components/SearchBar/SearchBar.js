import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './SearchBar.css';

export const SearchBar = ({updateSearch}) => {
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch('');
  }

  return (
    <form className='search' onSubmit={handleSubmit}>
      <div className="search__container">
        <AiOutlineSearch className="search__icon"/>
        <input
          className="search__input"
          type="text"
          name="search"
          value={search}
          placeholder="Search for a beer recipe"
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineClose className="search__clear" />
      </div>
      <Link to={"/search/" + search}><button onClick={() => setSearch('')}></button></Link>
    </form>
  )
}