import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className='navbar'>
      <h1>Reading List</h1>
      <p className='subheader-title'>
        Currently you have {books.length} books to get through...
      </p>
    </div>
  );
};

export default Navbar;
