import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);

  console.log("books", books);

  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>You have {books.length} books to read!</p>
    </div>
  );
};

export default Navbar;
