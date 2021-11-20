import './App.css';
import React from "react";
import {useEffect, useState, useRef} from "react";
import BooksAPI from "./api";
import Header from "./components/Header";
import RandomBook from "./components/RandomBook";
import AddBookForm from "./components/AddBookForm";

const App = () => {

  const [books, setBooks] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksRead, setBooksRead] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])

  useEffect( () => {
    BooksAPI.getAllBooks().then(books => setBooks(books));
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



  //refactor to switch, change variables names
  const handleRemoveBook = (id, shelf) => {
    let base
    let method
    if(shelf === 'all') {
      base = books
      method = setBooks
    }
    else if(shelf === 'to-read') {
      base = booksToRead
      method = setBooksToRead
    }
    else if(shelf === 'current') {
      base = currentBooks
      method = setCurrentBooks
    }
    else if(shelf === 'read') {
      base = booksRead
      method = setBooksRead
    }

      BooksAPI.removeBook(id)
        .then(
            () => {
              const removed = base.filter(book => book.id !== id)
              method(removed)
            })
  }

  return (
    <div>
      <Header />
      <RandomBook booksToRead={booksToRead}/>
      <AddBookForm booksToRead={booksToRead} booksRead={booksRead} currentBooks={currentBooks} books={books}
                   setBooks={setBooks} setBooksRead={setBooksRead} setBooksToRead={setBooksToRead}
                   setCurrentBooks={setCurrentBooks}/>

      <details><summary>Wszystkie książki</summary>
        {books.map(book => (
            <>
            <p key={book.id}>{book.title}</p>
          <button onClick={() => handleRemoveBook(book.id, 'all')}>Usuń</button>
            </>
        ))}
      </details>
      <details><summary>Do przeczytania</summary>
      {booksToRead.map(book => (
          <>
            <p key={book.id}>{book.title}</p>
            <button onClick={() => handleRemoveBook(book.id, 'to-read')}>Usuń</button>
          </>
      ))}
    </details>
      <details><summary>Przeczytane</summary>
      {booksRead.map(book => (
          <>
            <p key={book.id}>{book.title}</p>
            <button onClick={() => handleRemoveBook(book.id, 'read')}>Usuń</button>
          </>      ))}
      </details>
      <details><summary>Obecnie czytane</summary>
      {currentBooks.map(book => (
          <>
            <p key={book.id}>{book.title}</p>
            <button onClick={() => handleRemoveBook(book.id, 'current')}>Usuń</button>
          </>      ))}
      </details>
    </div>
  );
}

export default App;
