import './App.css';
import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";

const BASE_URL = 'http://localhost:4000/books'

const App = () => {

  const [books, setBooks] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksRead, setBooksRead] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  const [randomBook, setRandomBook] = useState(null)

  useEffect( () => {
    const getBooks = async () => {
    const response = await axios.get(BASE_URL)
    setBooks(response.data)}
      getBooks();
  },[]);

  useEffect( () => {
    const getBooksToRead = async () => {
      const response = await axios.get(BASE_URL)
     const toRead = response.data.filter(book => book.exclusiveShelf === 'to-read')
      setBooksToRead(toRead)}
    getBooksToRead();
  },[]);

  useEffect( () => {
    const getBooksRead = async () => {
      const response = await axios.get(BASE_URL)
      const read = response.data.filter(book => book.exclusiveShelf === 'read')
      setBooksRead(read)}
    getBooksRead();
  },[]);

  useEffect( () => {
    const getCurrentBooks = async () => {
      const response = await axios.get(BASE_URL)
      const current = response.data.filter(book => book.exclusiveShelf === 'currently-reading')
      setCurrentBooks(current)}
    getCurrentBooks();
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
