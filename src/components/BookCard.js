import React from "react";

const BookCard = ({book, onClose, hasCover}) => {
    return (
        <div className="bookCard">
            <button className="closeBtn" onClick={onClose}>x</button>
            <>
                <div className="coverWrapper">
                    {hasCover() ?
                        <img alt='book cover' src={book.cover} />
                        : (
                            <div className="noCoverCard"></div>
                        )}
                </div>
                <div className="bookDetails">
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.yearPublished}</p>
                </div>
                </>
        </div>
    )
}

export default BookCard