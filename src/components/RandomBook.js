import React from "react";
import '../index.css';


const RandomBook = ({randomBook}) => {

    return (
        <p className="randomBookWrapper">Kolejna książka do przeczytania:<span className="randomBook">{randomBook}</span></p>
    )
}

export default RandomBook