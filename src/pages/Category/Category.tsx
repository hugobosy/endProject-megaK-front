import React from "react";
import {Trash} from "@styled-icons/boxicons-solid";
import './Category.css';

export const Category = () => {
    return (
        <div className="page">
            <div className="Category__header">
                <h1>Kategorie</h1>

                <form>

                    <label>Dodaj nową kategorię</label>
                    <p>
                        <input type="text"/>
                    </p>
                    <label>Dodaj adres odnośnika do obrazka reprezentującego kategorię</label>
                    <p>
                        <input type="text"/>
                    </p>

                    <button type="submit">Dodaj</button>
                </form>
            </div>

            <div className="Category">
                <div className="Category__item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXHYedLls8U5YX93oIYr804vdEGdLX0AS-Q&usqp=CAU"
                        alt="plecak"/>
                    <div className="Category__content">
                        <h2>Plecaki</h2>
                        <span><Trash size="30" color="red"/></span>
                    </div>
                </div>
                <div className="Category__item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXHYedLls8U5YX93oIYr804vdEGdLX0AS-Q&usqp=CAU"
                        alt="plecak"/>
                    <div className="Category__content">
                        <h2>Plecaki</h2>
                        <span><Trash size="30" color="red"/></span>
                    </div>
                </div>
                <div className="Category__item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXHYedLls8U5YX93oIYr804vdEGdLX0AS-Q&usqp=CAU"
                        alt="plecak"/>
                    <div className="Category__content">
                        <h2>Plecaki</h2>
                        <span><Trash size="30" color="red"/></span>
                    </div>
                </div>
                <div className="Category__item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXHYedLls8U5YX93oIYr804vdEGdLX0AS-Q&usqp=CAU"
                        alt="plecak"/>
                    <div className="Category__content">
                        <h2>Plecaki</h2>
                        <span><Trash size="30" color="red"/></span>
                    </div>
                </div>
                <div className="Category__item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXHYedLls8U5YX93oIYr804vdEGdLX0AS-Q&usqp=CAU"
                        alt="plecak"/>
                    <div className="Category__content">
                        <h2>Plecaki</h2>
                        <span><Trash size="30" color="red"/></span>
                    </div>
                </div>
                <div className="Category__item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXHYedLls8U5YX93oIYr804vdEGdLX0AS-Q&usqp=CAU"
                        alt="plecak"/>
                    <div className="Category__content">
                        <h2>Plecaki</h2>
                        <span><Trash size="30" color="red"/></span>
                    </div>
                </div>
                <div className="Category__item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXHYedLls8U5YX93oIYr804vdEGdLX0AS-Q&usqp=CAU"
                        alt="plecak"/>
                    <div className="Category__content">
                        <h2>Plecaki</h2>
                        <span><Trash size="30" color="red"/></span>
                    </div>
                </div>
                <div className="Category__item">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlXHYedLls8U5YX93oIYr804vdEGdLX0AS-Q&usqp=CAU"
                        alt="plecak"/>
                    <div className="Category__content">
                        <h2>Plecaki</h2>
                        <span><Trash size="30" color="red"/></span>
                    </div>
                </div>
                {/*todo pobranie kategori z bazy*/}
            </div>
        </div>
    )
}