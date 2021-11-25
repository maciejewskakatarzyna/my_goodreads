import React from "react";
import Book from "./Book";
import '../index.css';


const BooksList = ({books, setBooks}) => {


    return (
        <>
        <h3>Wszystkie książki</h3>
        <ul className="bookList">
            {books.map(book => (
                <Book book={book} books={books} setBooks={setBooks}/>
            ))}
        </ul>
        </>
    )
}

export default BooksList