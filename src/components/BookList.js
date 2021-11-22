import React from "react";
import Book from "./Book";

const BookList = ({books, setBooks}) => {


    return (
        <ul>
            <p>Wszystkie książki</p>
            {books.map(book => (
                <Book book={book} books={books} setBooks={setBooks}/>
            ))}
        </ul>
    )
}

export default BookList