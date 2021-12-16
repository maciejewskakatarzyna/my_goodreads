import React, {useContext} from "react";
import Book from "../Book/Book";
import '../../index.css';
import BooksAPI from "../../api";
import BookContext from "../../contexts/BookContext";
import {StyledBookList} from "./BookList.styles";


const BooksList = () => {

    const context = useContext(BookContext)

    const handleRemoveBook = (index) => {
            BooksAPI.removeBook(index)
                .then(
                    () => {
                        const removed = context.books.filter(book => book.id !== index)
                            context.setBooks(removed)
                    })
    }


const getBase = () => {
    let list

    if(context.filteredBooks.length > 0) {
        list = <StyledBookList >
            {context.filteredBooks.map(book => (
                <Book key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)} />)
            )}
        </StyledBookList>
    }
    else {
        if (context.base.name === "Do przeczytania") {
            list = <StyledBookList >
                {context.books.filter(item => item.exclusiveShelf === 'to-read').map(book => (
                    <Book key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)} />)
                )}
            </StyledBookList>
        } else if (context.base.name === "Przeczytane") {
            list = <StyledBookList >
                {context.books.filter(item => item.exclusiveShelf === 'read').map(book => (
                    <Book key={book.id} book={book}  onDelete={() => handleRemoveBook(book.id)} />)
                )}
            </StyledBookList>}
        else if (context.base.name === "Aktualnie czytane") {
            list = <StyledBookList >
                {context.books.filter(item => item.exclusiveShelf === 'currently-reading').map(book => (
                    <Book key={book.id} book={book}  onDelete={() => handleRemoveBook(book.id)} />)
                )}
            </StyledBookList>
        }
        else if (context.base.name === "Wszystkie książki") {
            list = <StyledBookList >
                {context.books.map(book => (
                    <Book key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)}/>)
                )}
            </StyledBookList>
        }
    }

    return list
}


    return (
        <>
        <h3>{context.base.name}</h3>
            {getBase()}
        </>
    )
}

export default BooksList