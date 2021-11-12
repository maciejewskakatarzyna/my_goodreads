import './App.css';
import React from "react";
import {useEffect, useState, useRef} from "react";
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


  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const coverInput = useRef(null);

  const handleAddBook = (book) => {
    BooksAPI.addBook(book).then(
        (bookToAdd) => setBooks([...books, bookToAdd])
    )
  }


  let newBook = {}

  const handleSubmit = (event) => {
    event.preventDefault();
    newBook = {
      title: titleInput.current.value,
      author: authorInput.current.value,
      cover: coverInput.current.value,
    };
    handleAddBook(newBook)

    titleInput.current.value = "";
    authorInput.current.value = "";
    coverInput.current.value = "";

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

      <form onSubmit={handleSubmit}>
        <label>Tytuł<input type="text" ref={titleInput}/></label>
        <label>Autor<input type="text" ref={authorInput}/></label>
        <label>Okładka<input type="text" ref={coverInput}/></label>
        <button>DODAJ KSIĄŻKĘ</button>
      </form>

      <p>Kolejna książka do przeczytania: {randomBook}</p>
      <details><summary>Wszystkie książki</summary>
        {books.map(book => (
            <>
            <p key={book.id}>{book.title}</p>
          <button onClick={() => handleRemoveBook(book.id)}>Usuń</button>
            </>
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
