import './App.css';
import React from "react";
import {useEffect, useState} from "react";
import BooksApi from "./api";

const App = () => {

  const [books, setBooks] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksRead, setBooksRead] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  const [randomBook, setRandomBook] = useState(null)

  useEffect( () => {
    BooksApi.getAllBooks().then(books => setBooks(books));
  },[]);

  useEffect( () => {
    BooksApi.getAllBooks().then(books => {
      const toRead = books.filter(book => book.exclusiveShelf === 'to-read')
      setBooksToRead(toRead)})
  },[]);

  useEffect( () => {
    BooksApi.getAllBooks().then(books => {
      const read = books.filter(book => book.exclusiveShelf === 'read')
      setBooksRead(read)})
  },[]);

  useEffect( () => {
    BooksApi.getAllBooks().then(books => {
      const currently = books.filter(book => book.exclusiveShelf === 'currently-reading')
      setCurrentBooks(currently)})
  },[]);

  const getRandomBook = () => {
      const randomBook =
         booksToRead[Math.floor(Math.random() * booksToRead.length)];
        setRandomBook(randomBook.title)
    }

  return (
    <div>
      <button onClick={getRandomBook}>LOSUJ KSIĄŻKĘ DO PRZECZYTANIA</button>
      <p>Kolejna książka do przeczytania: {randomBook}</p>
      <details><summary>Wszystkie książki</summary>
        {books.map(book => (
            <p key={book.bookId}>{book.title}</p>))}
      </details>
      <details><summary>Do przeczytania</summary>
      {booksToRead.map(book => (
      <p key={book.bookId}>{book.title}</p>))}
    </details>
      <details><summary>Przeczytane</summary>
      {booksRead.map(book => (
          <p key={book.bookId}>{book.title}</p>
      ))}
      </details>
      <details><summary>Obecnie czytane</summary>
      {currentBooks.map(book => (
          <p key={book.bookId}>{book.title}</p>
      ))}
      </details>
    </div>
  );
}

export default App;
