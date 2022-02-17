import React, { useContext, useRef } from 'react';
import '../../index.css';
import BookContext from '../../contexts/BookContext';
import { StyledEditBookForm } from './EditBookForm.styles';
import { useBooks } from '../../hooks/useBooks';
import PropTypes from 'prop-types';

const EditBookForm = ({ book, handleClose }) => {
  const { setBooks, books, setCurrentBook } = useContext(BookContext);

  const { editBookById } = useBooks();

  const titleInput = useRef(null);
  const authorInput = useRef(null);
  const publisherInput = useRef(null);
  const radioInput1 = useRef(null);
  const radioInput2 = useRef(null);
  const radioInput3 = useRef(null);
  const genreInput = useRef(null);

  let bookToEdit = {};
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

  const res = {};

  function update(target, src) {
    Object.keys(target).forEach(k => (res[k] = src.hasOwnProperty(k) ? src[k] : target[k]));
    return res;
  }

  const handleEditBook = (id, bookToEdit) => {
    editBookById(id, bookToEdit);
    update(book, bookToEdit);
    setBooks(books);
    setCurrentBook(res);
  };

  const handleSubmit = event => {
    event.preventDefault();
    getRadioValue();
    bookToEdit = {
      id: book.id,
      title: titleInput.current.value ? titleInput.current.value : book.title,
      author: authorInput.current.value ? authorInput.current.value : book.author,
      publisher: publisherInput.current.value ? publisherInput.current.value : book.publisher,
      // shelf: radioShelf,
      // genre: genreInput.current.value,
    };
    handleEditBook(book.id, bookToEdit);
    handleClose();
  };

  return (
    <>
      <StyledEditBookForm onSubmit={handleSubmit}>
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
        <button>ZAPISZ ZMIANY</button>
      </StyledEditBookForm>
    </>
  );
};

EditBookForm.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    publisher: PropTypes.string,
  }),
  handleClose: PropTypes.func,
};

export default EditBookForm;
