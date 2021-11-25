import React from "react";

const BookContext = React.createContext({books: null, booksToRead: null, booksRead: null, currentBooks: null, getRandomBook: null})

export default BookContext