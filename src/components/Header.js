import React from "react";

const Header = () => {


    return (
        <div>
            <nav>
                <ul>
                    <li>Wszystkie książki</li>
                    <li>Przeczytane</li>
                    <li>Do przeczytania</li>
                    <li>Aktualnie czytane</li>
                </ul>
            </nav>
            <div>
                <p>Witaj użytkowniku</p>
                <a href="#">Wyloguj</a>
        </div>
        </div>
    )
}

export default Header