import React, {useContext, useState} from "react";
import '../../index.css';
import BookContext from "../../contexts/BookContext";
import ModalDialog from "../ModalDialog/ModalDialog";
import BookCard from "../BookCard/BookCard";
import {StyledGridBook, StyledListBook} from "./Book.styles";

const Book = ({book, onDelete, isList}) => {

    const [isBookCard, setIsBookCard] = useState(false)
    const [bookCard, setBookCard] = useState(null)
    const [currentBookIndex, setCurrentBookIndex] = useState(0)


    const {books} = useContext(BookContext)

    const hasCover = () => {
        if(book.cover !== "") {
            return true
        }
    }

    const handleShowCard = (index) => {
        const bookCardItem = books.filter(book => book.id === index)
          setBookCard(bookCardItem[0])
        const bookIndex = books.findIndex(book => book.id === index)
            if(bookIndex >= 0) {
                setCurrentBookIndex(bookIndex)
            }
          setIsBookCard(true)
    }

    const handleClose = () =>{
        setIsBookCard(false)
    }

    function handleNextBook() {
        const nextBookIndex = (currentBookIndex + 1) % books.length;
        setCurrentBookIndex(nextBookIndex)
        setBookCard(books[currentBookIndex])
    }

    function handlePrevBook() {
        const prevBookIndex = (currentBookIndex + books.length - 1) % books.length;
        setCurrentBookIndex(prevBookIndex)
        setBookCard(books[currentBookIndex])
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
                    <BookCard onDelete={onDelete} onClose={handleClose} book={bookCard} hasCover={hasCover} handlePrevBook={handlePrevBook} handleNextBook={handleNextBook}/>
                </ModalDialog>
                : null}
            </>
    )
}
export default Book