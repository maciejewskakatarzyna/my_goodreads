import React, {useContext} from "react";
import Book from "../Book/Book";
import '../../index.css';
import grid from "../../assets/grid.png"
import list from "../../assets/list.png"
import BooksAPI from "../../api";
import BookContext from "../../contexts/BookContext";
import {StyledBookList, Wrapper} from "./BookList.styles";


const BooksList = () => {
    const [isList, setIsList] = React.useState(false);

    const context = useContext(BookContext)

    const handleRemoveBook = (index) => {
            BooksAPI.removeBook(index)
                .then(
                    () => {
                        const removed = context.books.filter(book => book.id !== index)
                            context.setBooks(removed)
                    })
    }

    const changeToListView = () => {
        setIsList(true);
    }

    const changeToGridView = () => {
        setIsList(false);
    }

const getBase = () => {
    let list

    if(context.filteredBooks.length > 0) {
        list = <StyledBookList view={isList}>
            {context.filteredBooks.map(book => (
                <Book isList={isList} key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)} />)
            )}
        </StyledBookList>
    }
    else {
        if (context.base.name === "Do przeczytania") {
            list = <StyledBookList view={isList}>
                {context.books.filter(item => item.exclusiveShelf === 'to-read').map(book => (
                    <Book isList={isList} key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)} />)
                )}
            </StyledBookList>
        } else if (context.base.name === "Przeczytane") {
            list = <StyledBookList view={isList}>
                {context.books.filter(item => item.exclusiveShelf === 'read').map(book => (
                    <Book isList={isList} key={book.id} book={book}  onDelete={() => handleRemoveBook(book.id)} />)
                )}
            </StyledBookList>}
        else if (context.base.name === "Aktualnie czytane") {
            list = <StyledBookList view={isList}>
                {context.books.filter(item => item.exclusiveShelf === 'currently-reading').map(book => (
                    <Book isList={isList} key={book.id} book={book}  onDelete={() => handleRemoveBook(book.id)} />)
                )}
            </StyledBookList>
        }
        else if (context.base.name === "Wszystkie książki") {
            list = <StyledBookList view={isList}>
                {context.books.map(book => (
                    <Book isList={isList} key={book.id} book={book} onDelete={() => handleRemoveBook(book.id)}/>)
                )}
            </StyledBookList>
        }
    }

    return list
}


    return (
        <>
            <Wrapper>
                <h3>{context.base.name}</h3>
                <div className="listViewButtons">
                    <button onClick={changeToGridView} disabled={!isList}>{<img src={grid} alt="grid"/>}</button>
                    <button onClick={changeToListView} disabled={isList}>{<img src={list} alt="list"/>}</button>
                </div>
            </Wrapper>

            {getBase()}
        </>
    )
}

export default BooksList