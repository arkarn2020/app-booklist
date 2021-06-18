import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {
  const { books } = useContext(BookContext);

  return (
    <div className="navbar">
      <h2>BookList</h2>
      <p>Currently you have {books.length} book(s) to explore</p>
    </div>
  );
};

export default NavBar;
