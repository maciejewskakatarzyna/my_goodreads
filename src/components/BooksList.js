import React from "react";
import Book from "./Book";
import '../index.css';


const BooksList = ({books, setBooks}) => {


    return (
        <ul className="bookList">
            <p>Wszystkie książki</p>
            {books.map(book => (
                <Book book={book} books={books} setBooks={setBooks}/>
            ))}
        </ul>
    )
}

export default BooksList