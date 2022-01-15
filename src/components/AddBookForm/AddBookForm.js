import React, { useContext, useRef } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { StyledAddBookForm } from './AddBookForm.styles';
import { useBooks } from '../../hooks/useBooks';
import { useNavigate } from 'react-router';

const AddBookForm = ({
  onClose,
  isConfirmVisible,
  setIsConfirmVisible,
  setIsFormVisible,
  isFormVisible,
}) => {
  const { setBooks, books } = useContext(BookContext);

  const { addNewBook } = useBooks();
  const navigate = useNavigate();

  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const publisherInput = useRef(null);
  const radioInput1 = useRef(null);
  const radioInput2 = useRef(null);
  const radioInput3 = useRef(null);
  const genreInput = useRef(null);

  let newBook = {};
  let radioShelf;

  const getRadioValue = () => {
    if (radioInput1.current.checked) {
      radioShelf = radioInput1.current.value;
    } else if (radioInput2.current.checked) {
      radioShelf = radioInput2.current.value;
    } else if (radioInput3.current.checked) {
      radioShelf = radioInput3.current.value;
    }
  };

  const handleAddBook = book => {
    addNewBook(book).then(bookToAdd => setBooks([...books, bookToAdd]));
  };

  const handleSubmit = event => {
    event.preventDefault();
    getRadioValue();
    newBook = {
      title: titleInput.current.value,
      author: authorInput.current.value,
      publisher: publisherInput.current.value,
      shelf: radioShelf,
      genre: genreInput.current.value,
    };
    handleAddBook(newBook);
    setIsFormVisible(false);
    setIsConfirmVisible(true);
  };

  const handleCloseBtn = () => {
    onClose();
    navigate(-1);
  };

  const handleConfirmCloseBtn = () => {
    setIsConfirmVisible(false);
    navigate(-1);
  };

  return (
    <>
      {isFormVisible && (
        <StyledAddBookForm onSubmit={handleSubmit}>
          <button className='closeBtn' onClick={handleCloseBtn}>
            x
          </button>
          <label>
            Tytuł
            <input type='text' ref={titleInput} />
          </label>
          <label>
            Autor
            <input type='text' ref={authorInput} />
          </label>
          <label>
            Wydawnictwo
            <input type='text' ref={publisherInput} />
          </label>
          <br />
          <label>
            Gatunek
            <input type='text' ref={genreInput} />
          </label>
          <br />
          <label>
            Chcę przeczytać
            <input type='radio' name='shelf' value='to-read' ref={radioInput2} />
          </label>
          <br />
          <label>
            Przeczytane
            <input type='radio' name='shelf' value='read' ref={radioInput1} />
          </label>
          <br />
          <label>
            Teraz czytam
            <input type='radio' name='shelf' value='currently-reading' ref={radioInput3} />
          </label>
          <br />
          <button type='submit'>DODAJ KSIĄŻKĘ</button>
        </StyledAddBookForm>
      )}

      {isConfirmVisible && (
        <div className='addedConfirmation'>
          <button className='closeBtn' onClick={handleConfirmCloseBtn}>
            x
          </button>
          <p>Książka dodana!</p>
        </div>
      )}
    </>
  );
};

export default AddBookForm;
