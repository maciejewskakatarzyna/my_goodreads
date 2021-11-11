import './App.css';
import React from "react";
import {useEffect, useState} from "react";
import BooksAPI from "./api";

const App = () => {

  const [books, setBooks] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksRead, setBooksRead] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  const [randomBook, setRandomBook] = useState(null)

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

  const getRandomBook = () => {
      const randomBook =
         booksToRead[Math.floor(Math.random() * booksToRead.length)];
        setRandomBook(randomBook.title)
    }

  const newBook = {
    "id": 99999,
    "title": "Kolejna dodana książka",
    "author": "Jakiś Autor",
  }

  const handleAddBook = (book) => {
    BooksAPI.addBook(book).then(
        (bookToAdd) => setBooks([...books, bookToAdd])
    )
  }

  const handleRemoveBook = (id) => {
    BooksAPI.removeBook(id)
        .then(
            () => {
              const withoutRemoved = books.filter(book => book.id !== id)
              setBooks(withoutRemoved)
            })
  }


  return (
    <div>
      <button onClick={getRandomBook}>LOSUJ KSIĄŻKĘ DO PRZECZYTANIA</button>
      <button onClick={() => handleAddBook(newBook)}>DODAJ KSIĄŻKĘ</button>
      <p>Kolejna książka do przeczytania: {randomBook}</p>
      <details><summary>Wszystkie książki</summary>
        {books.map(book => (
            <p key={book.id}>{book.title}<button onClick={() => handleRemoveBook(book.id)}>Usuń</button></p>
        ))}
      </details>
      <details><summary>Do przeczytania</summary>
      {booksToRead.map(book => (
      <p key={book.id}>{book.title}</p>))}
    </details>
      <details><summary>Przeczytane</summary>
      {booksRead.map(book => (
          <p key={book.id}>{book.title}</p>
      ))}
      </details>
      <details><summary>Obecnie czytane</summary>
      {currentBooks.map(book => (
          <p key={book.id}>{book.title}</p>
      ))}
      </details>
    </div>
  );
}

export default App;
