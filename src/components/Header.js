import React from "react";
import '../index.css';
import plus from "../assets/plus.png"
import shuffle from "../assets/shuffle.png"
import BookContext from "../contexts/BookContext";

const Header = ({setBase, setBaseName}) => {


    const handleBaseChange = (clickedBase, name) => {
        setBase(clickedBase)
        setBaseName(name)
    }


    return (
        <div className="header">
            <BookContext.Consumer>
                {
                    ({books, booksToRead, booksRead, currentBooks, getRandomBook}) =>
                        <>
                        <nav>
                            <ul className="navigation">

                                <li><a href="#" onClick={() => handleBaseChange(books, "Wszystkie książki")}>Wszystkie
                                    książki</a></li>
                                <li><a href="#"
                                       onClick={() => handleBaseChange(booksRead, "Przeczytane")}>Przeczytane</a></li>
                                <li><a href="#" onClick={() => handleBaseChange(booksToRead, "Do przeczytania")}>Do
                                    przeczytania</a></li>
                                <li><a href="#" onClick={() => handleBaseChange(currentBooks, "Aktualnie czytane")}>Aktualnie
                                    czytane</a></li>
                            </ul>
                        </nav>
                    <form>
                    <input className="searchInput" type="text" placeholder="Wyszukaj książkę"/>
                    </form>
                    <button className="icon"> <img src={plus}/></button>
                    <button className="icon" onClick={getRandomBook}><img src={shuffle}/></button>
                    <div className="loginMenu">
                    <p>Witaj użytkowniku</p>
                    <a className="logout" href="#">Wyloguj</a>
                    </div>
                        </>
                }
            </BookContext.Consumer>
        </div>
    )
}

export default Header