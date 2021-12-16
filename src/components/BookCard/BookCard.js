import React, {useState, useContext} from "react";
import {StyledBookCard} from "./BookCard.styles";
import {StyledBookDetails} from "./BookDetails.styles";
import BookContext from "../../contexts/BookContext";

const BookCard = ({book, onDelete, onClose, hasCover}) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const context = useContext(BookContext)

    const options = [
        {
            value: 'to-read',
            label: 'Chcę przeczytać'
        },
        {
            value: 'read',
            label: 'Przeczytana'
        },
        {
            value: 'currently-reading',
            label: 'Czytam'
        },
    ]

    const changeShelf = (book, shelf) => {
        context.updateBook(book.id, {...book, exclusiveShelf: shelf})
    }

    const handleChange = (e) => {
        setSelectedOption(e.target.value)
        changeShelf(book, selectedOption)
    }


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
                    <div>
                        <select
                            value={selectedOption}
                            onChange={(e) => handleChange(e)}>
                            {options.map(o => (
                                <option key={o.value} value={o.value} >{o.label}</option>
                            ))}
                        </select>
                    </div>
                    <p>{book.exclusiveShelf}</p>
                    <button onClick={onDelete}>Usuń książkę</button>
                </StyledBookDetails>
                </>
        </StyledBookCard>
    )
}

export default BookCard


