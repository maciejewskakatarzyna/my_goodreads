import './index.css';
import React from "react";
import {useEffect, useState, useRef} from "react";
import BooksAPI from "./api";
import Header from "./components/Header";
import RandomBook from "./components/RandomBook";
import AddBookForm from "./components/AddBookForm";
import BooksList from "./components/BooksList";

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


  return (
      <>
      <Header setRandomBook={setRandomBook} setIsRandomBook={setIsRandomBook} books={books} booksToRead={booksToRead} booksRead={booksRead} currentBooks={currentBooks} setBase={setBase} setBaseName={setBaseName}/>
      <div className="wrapper">
        {isRandomBook ? (<RandomBook randomBook={randomBook}/>) : null}
        <BooksList base={base} baseName={baseName}/>




        {/*<AddBookForm booksToRead={booksToRead} booksRead={booksRead} currentBooks={currentBooks} books={books}*/}
      {/*             setBooks={setBooks} setBooksRead={setBooksRead} setBooksToRead={setBooksToRead}*/}
      {/*             setCurrentBooks={setCurrentBooks}/>*/}

    {/*  <details><summary>Wszystkie książki</summary>*/}
    {/*    {books.map(book => (*/}
    {/*        <>*/}
    {/*        <p key={book.id}>{book.title}</p>*/}
    {/*      <button onClick={() => handleRemoveBook(book.id, 'all')}>Usuń</button>*/}
    {/*        </>*/}
    {/*    ))}*/}
    {/*  </details>*/}
    {/*  <details><summary>Do przeczytania</summary>*/}
    {/*  {booksToRead.map(book => (*/}
    {/*      <>*/}
    {/*        <p key={book.id}>{book.title}</p>*/}
    {/*        <button onClick={() => handleRemoveBook(book.id, 'to-read')}>Usuń</button>*/}
    {/*      </>*/}
    {/*  ))}*/}
    {/*</details>*/}
    {/*  <details><summary>Przeczytane</summary>*/}
    {/*  {booksRead.map(book => (*/}
    {/*      <>*/}
    {/*        <p key={book.id}>{book.title}</p>*/}
    {/*        <button onClick={() => handleRemoveBook(book.id, 'read')}>Usuń</button>*/}
    {/*      </>      ))}*/}
    {/*  </details>*/}
    {/*  <details><summary>Obecnie czytane</summary>*/}
    {/*  {currentBooks.map(book => (*/}
    {/*      <>*/}
    {/*        <p key={book.id}>{book.title}</p>*/}
    {/*        <button onClick={() => handleRemoveBook(book.id, 'current')}>Usuń</button>*/}
    {/*      </>      ))}*/}
    {/*  </details>*/}
    </div>
        </>
  );
}

export default App;
