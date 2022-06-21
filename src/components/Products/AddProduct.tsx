import React, {Dispatch, SetStateAction} from "react";

interface Props {
    close: Dispatch<SetStateAction<boolean>>
}

export const AddProduct = (props: Props) => {
    return (
        <div className="Products__add">
            <form className="Products__add-form">
                <div>
                    <label>Nazwa firmy: </label>
                    <p><input type="text"/></p>
                </div>

                <div>
                    <label>Model produktu: </label>
                    <p><input type="text"/></p>
                </div>

                <div>
                    <label>Kategoria: </label>
                    <p>
                        <select>
                            <option value=""></option>
                            {/*    tutaj mapa po kategoriach z bazy*/}
                        </select>
                    </p>
                </div>

                <div>
                    <label>Rozmiar: </label>
                    <p>
                        <select>
                            <option value=""></option>
                            {/*    tutaj warunek na podstawie wybranej kategorii np L lub 43*/}
                        </select>
                    </p>
                </div>

                <div>
                    <label>Kolor: </label>
                    <p><input type="text"/></p>
                </div>

                <div>
                    <label>Ilość: </label>
                    <p><input type="number"/></p>
                </div>

                <div className="Products__add-textarea">
                    <label>Opis produktu: </label>
                    <p><textarea></textarea></p>
                </div>

                <div>
                    <label>Link do zdjęcia: </label>
                    <p><input type="text"/></p>
                </div>

                <button type="submit">Dodaj produkt</button>
                <span onClick={()=>props.close(false)}></span>
            </form>
        </div>
    )

}