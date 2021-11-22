import React, {useState} from "react";
import '../index.css';


const RandomBook = ({booksToRead}) => {

    const [randomBook, setRandomBook] = useState(null)

    const getRandomBook = () => {
        const randomBook =
            booksToRead[Math.floor(Math.random() * booksToRead.length)];
        setRandomBook(randomBook.title)
    }
    return (
        <>
            <button onClick={getRandomBook}>LOSUJ KSIĄŻKĘ DO PRZECZYTANIA</button>
            <p>Kolejna książka do przeczytania: {randomBook}</p>
        </>
    )
}

export default RandomBook