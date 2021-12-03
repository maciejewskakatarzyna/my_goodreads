import './index.css';
import React from "react";
import {useEffect, useState} from "react";
import BooksAPI from "./api";
import Header from "./components/Header";
import RandomBook from "./components/RandomBook";
import BooksList from "./components/BooksList";
import BookContext from "./contexts/BookContext";
import AddBookForm from "./components/AddBookForm";

const App = () => {

  const [books, setBooks] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksRead, setBooksRead] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  const [randomBook, setRandomBook] = useState(null)
  const [isRandomBook, setIsRandomBook] = useState(false)
  const [base, setBase] = useState({items: books, name: 'Wszystkie książki'})
  const [isFormVisible, setIsFormVisible] = useState(false)


  useEffect( () => {
    BooksAPI.getAllBooks().then(all => {
      setBooks(all)})
  },[books]);

// useEffect(() => {
//   setBooksToRead(books.filter(book => book.exclusiveShelf === 'to-read'))
// }, [])





  return (
      <BookContext.Provider value={{base: base, setBase: setBase, books: books, setBooks: setBooks, booksRead: booksRead, setBooksRead: setBooksRead, booksToRead: booksToRead, setBooksToRead: setBooksToRead, currentBooks: currentBooks, setCurrentBooks: setCurrentBooks, setIsRandomBook: setIsRandomBook, setRandomBook: setRandomBook}}>
      <Header setBase={setBase} setIsFormVisible={setIsFormVisible}/>
      <div className="wrapper">
        {isRandomBook ? <RandomBook randomBook={randomBook}/> : null}
        {isFormVisible ? <AddBookForm /> : null}
        <BooksList />
    </div>
        </BookContext.Provider>
  );
}

export default App;
