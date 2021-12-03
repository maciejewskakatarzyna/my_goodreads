import React, {useContext} from "react";
import '../index.css';
import plus from "../assets/plus.png"
import shuffle from "../assets/shuffle.png"
import BookContext from "../contexts/BookContext";

const Header = ({setIsFormVisible}) => {

    const context = useContext(BookContext)

    const handleBaseChange = (clickedBase) => {
        if(clickedBase.name === "Przeczytane") {
            context.setBase({items: context.booksRead, name: clickedBase.name})
        }
        else if(clickedBase.name === "Do przeczytania") {
            context.setBase({items: context.booksToRead, name: clickedBase.name})
        }
        else if(clickedBase.name === "Aktualnie czytane") {
            context.setBase({items: context.currentBooks, name: clickedBase.name})
        }
        else if(clickedBase.name === "Wszystkie książki") {
            context.setBase({items: context.books, name: clickedBase.name})
        }
    }

    const getRandomBook = () => {
        const toReadBase = context.books.filter(book => book.exclusiveShelf === 'to-read')
        const random = toReadBase[Math.floor(Math.random() * toReadBase.length)];
        context.setRandomBook(random)
        context.setIsRandomBook(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className="header">
            <>
                        <nav>
                            <ul className="navigation">

                                <li><a href="#" onClick={() => handleBaseChange({name: "Wszystkie książki"})}>Wszystkie
                                    książki</a></li>
                                <li><a href="#"
                                       onClick={() => handleBaseChange({name: "Przeczytane"})}>Przeczytane</a></li>
                                <li><a href="#" onClick={() => handleBaseChange({name: "Do przeczytania"})}>Do
                                    przeczytania</a></li>
                                <li><a href="#" onClick={() => handleBaseChange({name: "Aktualnie czytane"})}>Aktualnie
                                    czytane</a></li>
                            </ul>
                        </nav>
                    <form>
                    <input className="searchInput" type="text" placeholder="Wyszukaj książkę"/>
                    </form>
                    <button className="icon" onClick={() => setIsFormVisible(true)}> <img alt="plus" src={plus}/></button>
                    <button className="icon" onClick={getRandomBook}><img alt="shuffle" src={shuffle}/></button>
                    <div className="loginMenu">
                    <p>Witaj użytkowniku</p>
                    <a className="logout" href="#">Wyloguj</a>
                    </div>
                        </>
        </div>
    )
}

export default Header