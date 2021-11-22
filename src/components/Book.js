import React from "react";
import BooksAPI from "../api";

const Book = ({book, books, setBooks}) => {

    //refactor to switch, change variables names
    const handleRemoveBook = (id, shelf) => {
        let base
        let method
        if(shelf === 'all') {
            base = books
            method = setBooks
        }
        // else if(shelf === 'to-read') {
        //     base = booksToRead
        //     method = setBooksToRead
        // }
        // else if(shelf === 'current') {
        //     base = currentBooks
        //     method = setCurrentBooks
        // }
        // else if(shelf === 'read') {
        //     base = booksRead
        //     method = setBooksRead
        // }

        BooksAPI.removeBook(id)
            .then(
                () => {
                    const removed = base.filter(book => book.id !== id)
                    method(removed)
                })
    }


    return (
        <>
            <p key={book.id}>{book.title}</p>
            <button onClick={() => handleRemoveBook(book.id, 'all')}>Usuń</button>
        </>
    )
}

export default Book