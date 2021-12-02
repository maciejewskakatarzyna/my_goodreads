import './index.css';
import React from "react";
import {useEffect, useState} from "react";
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
  const [base, setBase] = useState({items: books, name: 'Wszystkie książki'})


  useEffect( () => {
    BooksAPI.getAllBooks().then(all => {
      setBooks(all)
          })
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
      <BookContext.Provider value={{base: base, setBase: setBase, books: books, setBooks: setBooks, booksRead: booksRead, setBooksRead: setBooksRead, booksToRead: booksToRead, setBooksToRead: setBooksToRead, currentBooks: currentBooks, setCurrentBooks: setCurrentBooks, getRandomBook: getRandomBook}}>
      <Header setBase={setBase} />
      <div className="wrapper">
        {isRandomBook ? <RandomBook randomBook={randomBook}/> : null}
        <BooksList />



        {/*<AddBookForm booksToRead={booksToRead} booksRead={booksRead} currentBooks={currentBooks} books={books}*/}
      {/*             setBooks={setBooks} setBooksRead={setBooksRead} setBooksToRead={setBooksToRead}*/}
      {/*             setCurrentBooks={setCurrentBooks}/>*/}


    </div>
        </BookContext.Provider>
  );
}

export default App;
