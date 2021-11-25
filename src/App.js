import './index.css';
import React from "react";
import {useEffect, useState, useRef} from "react";
import BooksAPI from "./api";
import Header from "./components/Header";
import RandomBook from "./components/RandomBook";
import AddBookForm from "./components/AddBookForm";
import BooksList from "./components/BooksList";
import BookContext from "./contexts/BookContext";

const App = () => {

  const [books, setBooks] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksRead, setBooksRead] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  const [randomBook, setRandomBook] = useState(null)
  const [isRandomBook, setIsRandomBook] = useState(false)
  const [base, setBase] = useState([])
  const [baseName, setBaseName] = useState(null)


  useEffect( () => {
    BooksAPI.getAllBooks().then(books => {setBooks(books)
    setBase(books)});
  },[]);

  useEffect( () => {
    BooksAPI.getAllBooks().then(books => {
      const toRead = books.filter(book => book.exclusiveShelf === 'to-read')
      setBooksToRead(toRead)})
  },[]);

  useEffect( () => {
    BooksAPI.getAllBooks().then(books => {
      const read = books.filter(book => book.exclusiveShelf === 'read')
      setBooksRead(read)})
  },[]);

  useEffect( () => {
    BooksAPI.getAllBooks().then(books => {
      const currently = books.filter(book => book.exclusiveShelf === 'currently-reading')
      setCurrentBooks(currently)})
  },[]);

  const getRandomBook = () => {
    const randomBook =
        booksToRead[Math.floor(Math.random() * booksToRead.length)];
    setRandomBook(randomBook.title)
    setIsRandomBook(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  return (
      <BookContext.Provider value={{books: books, booksRead: booksRead, booksToRead: booksToRead, currentBooks: currentBooks, getRandomBook: getRandomBook}}>
      <Header setBase={setBase} setBaseName={setBaseName} />
      <div className="wrapper">
        {isRandomBook ? (<RandomBook randomBook={randomBook}/>) : null}
        <BooksList base={base} baseName={baseName}/>


        {/*<AddBookForm booksToRead={booksToRead} booksRead={booksRead} currentBooks={currentBooks} books={books}*/}
      {/*             setBooks={setBooks} setBooksRead={setBooksRead} setBooksToRead={setBooksToRead}*/}
      {/*             setCurrentBooks={setCurrentBooks}/>*/}


    </div>
        </BookContext.Provider>
  );
}

export default App;
