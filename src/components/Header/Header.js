import React, {useContext} from "react";
import '../../index.css';
import plus from "../../assets/plus.png"
import shuffle from "../../assets/shuffle.png"
import BookContext from "../../contexts/BookContext";
import {StyledHeader} from "./Header.styles";
import {StyledNavigation} from "./Navigation.styles";
import {StyledLoginMenu} from "./LoginMenu.styles";
import {StyledSearchInput} from "./SearchInput.styles";

const Header = ({setIsFormVisible, setIsAddedToCurrent, setIsBookAdded}) => {

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
        setIsAddedToCurrent(false)
        const toReadBase = context.books.filter(book => book.exclusiveShelf === 'to-read')
        const random = toReadBase[Math.floor(Math.random() * toReadBase.length)];
        context.setRandomBook(random)
        context.setIsRandomBook(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const handleShowForm = () => {
        setIsBookAdded(false)
        setIsFormVisible(true)
    }


    function getFilteredBooksForText(text) {
        return context.books.filter(book => book.title.toString().toLowerCase().includes(text.toLowerCase()) || book.author.toString().toLowerCase().includes(text.toLowerCase()))
    }

    function filterBooks(e) {
        const text = e.currentTarget.value;
        const filtered = getFilteredBooksForText(text);
        context.setFilteredBooks(filtered);
    }



    return (
        <StyledHeader >
            <>
                        <nav>
                            <StyledNavigation >

                                <li><a href="#" onClick={() => handleBaseChange({name: "Wszystkie książki"})}>Wszystkie
                                    książki</a></li>
                                <li><a href="#"
                                       onClick={() => handleBaseChange({name: "Przeczytane"})}>Przeczytane</a></li>
                                <li><a href="#" onClick={() => handleBaseChange({name: "Do przeczytania"})}>Do
                                    przeczytania</a></li>
                                <li><a href="#" onClick={() => handleBaseChange({name: "Aktualnie czytane"})}>Aktualnie
                                    czytane</a></li>
                            </StyledNavigation>
                        </nav>
                    <form>
                        <StyledSearchInput className="searchInput" type="text" placeholder="Wyszukaj książkę" onInput={filterBooks}/>
                    </form>
                    <button className="icon" onClick={handleShowForm}> <img alt="plus" src={plus}/></button>
                    <button className="icon" onClick={getRandomBook}><img alt="shuffle" src={shuffle}/></button>
                    <StyledLoginMenu >
                        <p>Witaj użytkowniku</p>
                        <a href="#">Wyloguj</a>
                    </StyledLoginMenu>
                        </>
        </StyledHeader>
    )
}

export default Header