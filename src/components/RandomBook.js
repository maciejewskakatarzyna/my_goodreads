import React from "react";
import '../index.css';


const RandomBook = ({randomBook, onClose, startReading}) => {

    return (
        <div className="randomBookWrapper">
            <button className="closeBtn" onClick={onClose}>x</button>
            <p>Kolejna książka do przeczytania:<span className="randomBook">{randomBook.title}</span></p>
            <button onClick={startReading}>Zacznij czytać!</button>
        </div>
    )
}

export default RandomBook