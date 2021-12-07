import React from "react";
import '../../index.css';


const RandomBook = ({randomBook, onClose, startReading, isAddedToCurrent}) => {

    return (
        <div className="randomBookWrapper">
            <button className="closeBtn" onClick={onClose}>x</button>
            {!isAddedToCurrent ?
                <>
                <p>Kolejna książka do przeczytania:<span className="randomBook">{randomBook.title}</span></p>
                <button onClick={startReading}>Zacznij czytać!</button>
                </>
                :
                <p><span className="randomBook">{randomBook.title}</span>dodana do aktualnie czytanych książek!</p>
            }
        </div>
    )
}

export default RandomBook