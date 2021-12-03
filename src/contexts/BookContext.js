import React from "react";

const BookContext = React.createContext({base: null, setBase: null, books: null, setBooks: null, booksToRead: null, setBooksToRead: null, booksRead: null, setBooksRead: null, currentBooks: null, setCurrentBooks: null, setRandomBook: null, setIsRandomBook: null})

export default BookContext