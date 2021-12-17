import React, {useContext, useState} from "react";
import '../../index.css';
import BookContext from "../../contexts/BookContext";
import ModalDialog from "../ModalDialog/ModalDialog";
import BookCard from "../BookCard/BookCard";
import {StyledGridBook, StyledListBook} from "./Book.styles";

const Book = ({book, onDelete, isList}) => {

    const [isBookCard, setIsBookCard] = useState(false)
    const [bookCard, setBookCard] = useState(null)


    const context = useContext(BookContext)

    const hasCover = () => {
        if(book.cover !== "") {
            return true
        }
    }

    const handleShowCard = (index) => {
        const bookCardItem = context.books.filter(book => book.id === index)
          setBookCard(bookCardItem[0])
          setIsBookCard(true)
    }

    const handleClose = () =>{
        setIsBookCard(false)
    }


    return (
        <>
            {isList ?
                <StyledListBook>
                    <div className="bookWrapper">
                        <p>{book.title}</p>
                        <p>{book.author}</p>
                    </div>
                    <button onClick={onDelete}>X</button>

                </StyledListBook>
            :  <StyledGridBook onClick={() => handleShowCard(book.id)}>
                    {hasCover() ?
                        <div className="bookWrapper">
                            <img alt="book cover" src={book.cover} className="bookCover" />
                            <button onClick={onDelete}>X</button>
                        </div>
                        : (
                            <div className="bookWrapper">
                                <div className="noCover">
                                    <p>{book.title}</p>
                                    <p>{book.author}</p>
                                </div>
                                <button onClick={onDelete}>X</button>
                            </div>
                        )
                    }
                </StyledGridBook>
            }

            {isBookCard ?
                <ModalDialog>
                    <BookCard onDelete={onDelete} onClose={handleClose} book={bookCard} hasCover={hasCover}/>
                </ModalDialog>
                : null}
            </>
    )
}
export default Book