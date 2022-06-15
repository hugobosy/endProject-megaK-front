import React from "react";
import './Products.css';

export const Products = () => {
    return (
        <div className="page">

            <div className="Products__header">
                <h1>Produkty</h1>
                <form>
                    <input type="search" className="SearchForm SearchProduct" placeholder="Znajdź produkt..."/>
                </form>
            </div>

            <div className="Products__sort">
                <form>
                    <h3>Sortuj po</h3>
                    <select>
                        <option value="-">-</option>
                        <option value="najnowszych">najnowszych</option>
                        <option value="najstarszych">najstarszych</option>
                        <option value="alfabetycznie">alfabetycznie</option>
                        <option value="najdrozszych">najdrozszych</option>
                        <option value="najtanszych">najtanszych</option>
                    </select>
                </form>
            </div>

            <div className="Products__list">

                <div className="Products__item">
                    <img src="https://static.pepper.pl/threads/raw/bskQO/540238_1/re/768x768/qt/60/540238_1.jpg"
                         alt="But"/>
                    <div className="Products__desc">
                        <h4>Buty Adidas</h4>
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                            ipsum dolor sit
                        </p>
                        <p>299zł</p>
                        <div className="Products__btn">
                            <button>Edytuj</button>
                            <button>Usuń</button>
                        </div>
                    </div>
                </div>

                <div className="Products__item">
                    <img src="https://static.pepper.pl/threads/raw/bskQO/540238_1/re/768x768/qt/60/540238_1.jpg"
                         alt="But"/>
                    <div className="Products__desc">
                        <h4>Buty Adidas</h4>
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                            ipsum dolor sit
                        </p>
                        <p>299zł</p>
                        <div className="Products__btn">
                            <button>Edytuj</button>
                            <button>Usuń</button>
                        </div>
                    </div>
                </div>

                <div className="Products__item">
                    <img src="https://static.pepper.pl/threads/raw/bskQO/540238_1/re/768x768/qt/60/540238_1.jpg"
                         alt="But"/>
                    <div className="Products__desc">
                        <h4>Buty Adidas</h4>
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                            ipsum dolor sit
                        </p>
                        <p>299zł</p>
                        <div className="Products__btn">
                            <button>Edytuj</button>
                            <button>Usuń</button>
                        </div>
                    </div>
                </div>

                <div className="Products__item">
                    <img src="https://static.pepper.pl/threads/raw/bskQO/540238_1/re/768x768/qt/60/540238_1.jpg"
                         alt="But"/>
                    <div className="Products__desc">
                        <h4>Buty Adidas</h4>
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                            ipsum dolor sit
                        </p>
                        <p>299zł</p>
                        <div className="Products__btn">
                            <button>Edytuj</button>
                            <button>Usuń</button>
                        </div>
                    </div>
                </div>

                <div className="Products__item">
                    <img src="https://static.pepper.pl/threads/raw/bskQO/540238_1/re/768x768/qt/60/540238_1.jpg"
                         alt="But"/>
                    <div className="Products__desc">
                        <h4>Buty Adidas</h4>
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                            ipsum dolor sit
                        </p>
                        <p>299zł</p>
                        <div className="Products__btn">
                            <button>Edytuj</button>
                            <button>Usuń</button>
                        </div>
                    </div>
                </div>

                <div className="Products__item">
                    <img src="https://static.pepper.pl/threads/raw/bskQO/540238_1/re/768x768/qt/60/540238_1.jpg"
                         alt="But"/>
                    <div className="Products__desc">
                        <h4>Buty Adidas</h4>
                        <p>Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem
                            ipsum dolor sit
                        </p>
                        <p>299zł</p>
                        <div className="Products__btn">
                            <button>Edytuj</button>
                            <button>Usuń</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}