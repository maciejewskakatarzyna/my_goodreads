import React from "react";
import {StyledBookCard} from "./BookCard.styles";
import {StyledBookDetails} from "./BookDetails.styles";

const BookCard = ({book, onClose, hasCover}) => {
    return (
        <StyledBookCard>
            <button className="closeBtn" onClick={onClose}>x</button>
            <>
                <div className="coverWrapper">
                    {hasCover() ?
                        <img alt='book cover' src={book.cover} />
                        : (
                            <div className="noCoverCard"></div>
                        )}
                </div>
                <StyledBookDetails >
                    <p>{book.title}</p>
                    <p>{book.author}</p>
                    <p>{book.yearPublished}</p>
                </StyledBookDetails>
                </>
        </StyledBookCard>
    )
}

export default BookCard