import React from "react";
import '../index.css';
import plus from "../assets/plus.png"
import shuffle from "../assets/shuffle.png"

const Header = ({booksToRead, setRandomBook, setIsRandomBook}) => {

        const getRandomBook = () => {
            const randomBook =
                booksToRead[Math.floor(Math.random() * booksToRead.length)];
            setRandomBook(randomBook.title)
            setIsRandomBook(true);
    }

    return (
        <div className="header">
            <nav>
                <ul className="navigation">
                    <li>Wszystkie książki</li>
                    <li>Przeczytane</li>
                    <li>Do przeczytania</li>
                    <li>Aktualnie czytane</li>
                </ul>
            </nav>
            <form>
                <input className="searchInput" type="text" placeholder="Wyszukaj książkę"/>
            </form>
            <button className="icon" ><img src={plus}/></button>
            <button className="icon" onClick={getRandomBook}><img src={shuffle}/></button>
            <div className="loginMenu">
                <p>Witaj użytkowniku</p>
                <a className="logout" href="#">Wyloguj</a>
            </div>
        </div>
    )
}

export default Header