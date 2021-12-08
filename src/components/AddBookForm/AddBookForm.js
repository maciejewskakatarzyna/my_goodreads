import React, {useContext, useRef} from "react";
import BooksAPI from "../../api";
import '../../index.css';
import BookContext from "../../contexts/BookContext";
import {StyledAddBookForm} from "./AddBookForm.styles";


const AddBookForm = ({onClose, setIsBookAdded, isBookAdded}) => {

    const context = useContext(BookContext)

    const titleInput = useRef(null);
    const authorInput = useRef(null);
    const coverInput = useRef(null);
    const radioInput1 = useRef(null);
    const radioInput2 = useRef(null);
    const radioInput3 = useRef(null);

    let newBook = {}
    let radioShelf

    const getRadioValue = () => {
        if (radioInput1.current.checked) {
            radioShelf = radioInput1.current.value
        }
        else if (radioInput2.current.checked) {
            radioShelf = radioInput2.current.value
        }
        else if (radioInput3.current.checked) {
            radioShelf = radioInput3.current.value
        }
    }

    const handleAddBook = (book) => {
        BooksAPI.addBook(book).then(
            (bookToAdd) => context.setBooks([...context.books, bookToAdd])
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getRadioValue()
        newBook = {
            title: titleInput.current.value,
            author: authorInput.current.value,
            cover: coverInput.current.value,
            exclusiveShelf: radioShelf,
        };
        handleAddBook(newBook, newBook.exclusiveShelf)
        setIsBookAdded(true)

        titleInput.current.value = "";
        authorInput.current.value = "";
        coverInput.current.value = "";
    }


    return (
        <>
        {!isBookAdded ?
            <StyledAddBookForm onSubmit={handleSubmit}>
                <button className="closeBtn" onClick={onClose}>x</button>
                <label>Tytuł<input type="text" ref={titleInput}/></label>
                <label>Autor<input type="text" ref={authorInput}/></label>
                <label>Okładka<input type="text" ref={coverInput}/></label><br/>
                <label>Przeczytane<input type="radio" name="shelf" value="read" ref={radioInput1}/></label><br/>
                <label>Do przeczytania<input type="radio" name="shelf" value="to-read" ref={radioInput2}/></label><br/>
                <label>Aktualnie czytane<input type="radio" name="shelf" value="currently-reading" ref={radioInput3}/></label><br/>
                <button>DODAJ KSIĄŻKĘ</button>
            </StyledAddBookForm>
        :
            <div className="addedConfirmation">
            <button className="closeBtn" onClick={onClose}>x</button>
            <p>Książka dodana!</p>
            </div>
                }
            </>
    )
}

export default AddBookForm