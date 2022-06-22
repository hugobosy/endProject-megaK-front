import React, {Dispatch, SetStateAction, useState} from "react";

interface Props {
    close: Dispatch<SetStateAction<boolean>>
}

export const AddProduct = (props: Props) => {

    const [data, setData] = useState({
        firm: '',
        model: '',
        category: '',
        size: '',
        color: '',
        quantity: 0,
        description: '',
        picture: '',
    })

    return (
        <div className="Products__add">
            <form className="Products__add-form">
                <div>
                    <label>Nazwa firmy: </label>
                    <p><input type="text" onChange={e => setData({...data, firm: e.target.value})}/></p>
                </div>

                <div>
                    <label>Model produktu: </label>
                    <p><input type="text" onChange={e => setData({...data, model: e.target.value})}/></p>
                </div>

                <div>
                    <label>Kategoria: </label>
                    <p>
                        <select onChange={e => setData({...data, category: e.target.value})}>
                            <option value="-">-</option>
                            <option value="buty">Buty</option>
                            {/*    tutaj mapa po kategoriach z bazy*/}
                        </select>
                    </p>
                </div>

                <div>
                    <label>Rozmiar: </label>
                    <p>
                        <select onChange={e => setData({...data, size: e.target.value})}>
                            <option value="-">-</option>
                            <option value="l">L</option>
                            {/*    tutaj warunek na podstawie wybranej kategorii np L lub 43*/}
                        </select>
                    </p>
                </div>

                <div>
                    <label>Kolor: </label>
                    <p><input type="text" onChange={e => setData({...data, color: e.target.value})}/></p>
                </div>

                <div>
                    <label>Ilość: </label>
                    <p><input type="number" onChange={e => setData({...data, quantity: Number(e.target.value)})}/></p>
                </div>

                <div className="Products__add-textarea">
                    <label>Opis produktu: </label>
                    <p><textarea onChange={e => setData({...data, description: e.target.value})}></textarea></p>
                </div>

                <div>
                    <label>Link do zdjęcia: </label>
                    <p><input type="text" onChange={e => setData({...data, picture: e.target.value})}/></p>
                </div>

                <button type="submit">Dodaj produkt</button>
                <span onClick={()=>props.close(false)}></span>
            </form>
        </div>
    )

}

// todo dodaj placeholders do input