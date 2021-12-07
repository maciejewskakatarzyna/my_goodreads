import './index.css';
import React from "react";
import {useEffect, useState} from "react";
import BooksAPI from "./api";
import Header from "./components/Header/Header";
import RandomBook from "./components/RandomBook/RandomBook";
import BooksList from "./components/BookList/BooksList";
import BookContext from "./contexts/BookContext";
import AddBookForm from "./components/AddBookForm/AddBookForm";
import ModalDialog from "./components/ModalDialog/ModalDialog";

const App = () => {

  const [books, setBooks] = useState([])
  const [booksToRead, setBooksToRead] = useState([])
  const [booksRead, setBooksRead] = useState([])
  const [currentBooks, setCurrentBooks] = useState([])
  const [randomBook, setRandomBook] = useState(null)
  const [isRandomBook, setIsRandomBook] = useState(false)
  const [base, setBase] = useState({items: books, name: 'Wszystkie książki'})
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [isAddedToCurrent, setIsAddedToCurrent] = useState(false)
  const [isBookAdded, setIsBookAdded] = useState(false)



  useEffect( () => {
    BooksAPI.getAllBooks().then(all => {
      setBooks(all)})
  },[books]);

const handleClose = (modal) => {
if(modal === 'randomBookModal') {
  setIsRandomBook(false)
}
else if(modal === 'addFormModal') {
  setIsFormVisible(false)
}
else if(modal === 'addConfirmModal') {
    setIsFormVisible(false)
}
}

const updateBook = (indexToUpdate, bookToUpdate) => {
    BooksAPI.replaceBook(bookToUpdate)
        .then(
            (updatedBook) =>
            {const booksUpdated = books.map((book, index) =>
                    index === indexToUpdate ? updatedBook : book
                )
                setBooks(booksUpdated)
              return { booksUpdated };
            })
  }

  const startReading = (randomBook) => {
    updateBook(randomBook.id, {...randomBook, exclusiveShelf: "currently-reading"})
    setIsAddedToCurrent(true)
  }



  return (
      <BookContext.Provider value={{base: base, setBase: setBase, books: books, setBooks: setBooks, booksRead: booksRead, setBooksRead: setBooksRead, booksToRead: booksToRead, setBooksToRead: setBooksToRead, currentBooks: currentBooks, setCurrentBooks: setCurrentBooks, setIsRandomBook: setIsRandomBook, setRandomBook: setRandomBook}}>
      <Header setBase={setBase} setIsFormVisible={setIsFormVisible} setIsAddedToCurrent={setIsAddedToCurrent} setIsBookAdded={setIsBookAdded}/>
      <div className="wrapper">
        {isRandomBook ? <RandomBook randomBook={randomBook} startReading={() => startReading(randomBook)} onClose={() => handleClose('randomBookModal')} isAddedToCurrent={isAddedToCurrent}/> : null}
        {isFormVisible ?
            <ModalDialog >
            <AddBookForm onClose={() => handleClose('addFormModal')} setIsBookAdded={setIsBookAdded} isBookAdded={isBookAdded} onCloseConfirm={() => handleClose("addConfirmModal")}/>
            </ModalDialog>
            : null}
        <BooksList handleUpdateBook={updateBook} handleClose={handleClose}/>

    </div>
        </BookContext.Provider>
  );
}

export default App;
