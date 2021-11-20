import './App.css';
import React from "react";
import {useEffect, useState, useRef} from "react";
import BooksAPI from "./api";
import Header from "./components/Header";
import RandomBook from "./components/RandomBook";

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


  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const coverInput = useRef(null);
  const radioInput1 = useRef(null);
  const radioInput2 = useRef(null);
  const radioInput3 = useRef(null);


  const handleAddBook = (book) => {
    getRadioValue()
    let base
    let method
   if(radioShelf === 'to-read') {
      base = booksToRead
      method = setBooksToRead
    }
    else if(radioShelf === 'currently-reading') {
      base = currentBooks
      method = setCurrentBooks
    }
    else if(radioShelf === 'read') {
      base = booksRead
      method = setBooksRead
    }
    BooksAPI.addBook(book).then(
        (bookToAdd) => method([...base, bookToAdd])
    )
    BooksAPI.addBook(book).then(
        (bookToAdd) => setBooks([...books, bookToAdd])
    )
  }

  let newBook = {}
  let radioShelf

  const getRadioValue = () => {
    if (radioInput1.current.checked) {
      radioShelf = radioInput1.current.value
    }
    else if (radioInput2.current.checked) {
      radioShelf = radioInput2.current.value
    }
    else if (radioInput3.current.checked) {
      radioShelf = radioInput3.current.value
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    getRadioValue()
    newBook = {
      title: titleInput.current.value,
      author: authorInput.current.value,
      cover: coverInput.current.value,
      exclusiveShelf: radioShelf,
    };
    handleAddBook(newBook, newBook.exclusiveShelf)
    console.log(newBook.exclusiveShelf)

    titleInput.current.value = "";
    authorInput.current.value = "";
    coverInput.current.value = "";
  }


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
      <form onSubmit={handleSubmit}>
        <label>Tytuł<input type="text" ref={titleInput}/></label>
        <label>Autor<input type="text" ref={authorInput}/></label>
        <label>Okładka<input type="text" ref={coverInput}/></label><br/>
        <label>Przeczytane<input type="radio" name="shelf" value="read" ref={radioInput1}/></label><br/>
        <label>Do przeczytania<input type="radio" name="shelf" value="to-read" ref={radioInput2}/></label><br/>
        <label>Aktualnie czytane<input type="radio" name="shelf" value="currently-reading" ref={radioInput3}/></label><br/>
        <button>DODAJ KSIĄŻKĘ</button>
      </form>

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
