import './App.css';
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
     const toRead = response.data.filter(book => book.ExclusiveShelf === 'to-read')
      setBooksToRead(toRead)}
    getBooksToRead();
  },[]);

  useEffect( () => {
    const getBooksRead = async () => {
      const response = await axios.get(BASE_URL)
      const read = response.data.filter(book => book.ExclusiveShelf === 'read')
      setBooksRead(read)}
    getBooksRead();
  },[]);

  useEffect( () => {
    const getCurrentBooks = async () => {
      const response = await axios.get(BASE_URL)
      const current = response.data.filter(book => book.ExclusiveShelf === 'currently-reading')
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
      <h1>Do przeczytania</h1>
        {booksToRead.map(book => (
            <p key={book.bookId}>{book.title}</p>
            ))}
      <h1>Przeczytane</h1>
      {booksRead.map(book => (
          <p key={book.bookId}>{book.title}</p>
      ))}
      <h1>Obecnie czytane</h1>
      {currentBooks.map(book => (
          <p key={book.bookId}>{book.title}</p>
      ))}
    </div>
  );
}

export default App;
