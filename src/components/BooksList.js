import React from "react";
import Book from "./Book";
import '../index.css';


const BooksList = ({base, baseName}) => {

    return (
        <>
        <h3>{baseName}</h3>
        <ul className="bookList">
            {base.map(book => (
                <Book key={book.id} book={book}/>
            ))}
        </ul>
        </>
    )
}

export default BooksList