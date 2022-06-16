import React, {ReactElement, useEffect, useState} from "react";
import {Trash} from "@styled-icons/boxicons-solid";
import './Category.css';
import {CategoryList} from "../../components/Category/CategoryList";

export const Category = (): ReactElement => {



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
            {/*    todo dodawanie kategorii bo bazy*/}
            </div>

            <CategoryList/>

        </div>
    )
}