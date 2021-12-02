import React from "react";
import '../index.css';

const Book = ({book, onDelete}) => {

    const hasCover = () => {
        if(book.cover !== "") {
            return true
        }
    }

    return (
        <div className="book">
            {hasCover() ?
                <img alt="book cover" src={book.cover} className="bookCover" />
            : (
                <div className="noCover">
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <button onClick={onDelete}>X</button>
                </div>)}
        </div>
    )
}
export default Book