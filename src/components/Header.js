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
            <div className="loginMenu">
                <p>Witaj użytkowniku</p>
                <a href="#">Wyloguj</a>
            </div>
        </div>
    )
}

export default Header