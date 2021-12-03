import React from "react";
import '../index.css';


const RandomBook = ({randomBook, onClose}) => {

    return (
        <div className="randomBookWrapper">
            <button className="closeBtn" onClick={onClose}>x</button>
            <p>Kolejna książka do przeczytania:<span className="randomBook">{randomBook}</span></p>
        </div>
    )
}

export default RandomBook