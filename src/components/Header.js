import React from "react";
import '../index.css';

const Header = () => {


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
            <div className="loginMenu">
                <p>Witaj użytkowniku</p>
                <a className="logout" href="#">Wyloguj</a>
            </div>
        </div>
    )
}

export default Header