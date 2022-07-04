import React, {SyntheticEvent} from "react";

interface Props {
    handleSort: (e: string)=>void,
}

export const ProductSort = (props: Props) => {
    return (
        <div className="Products__sort">
            <form>
                <h3>Sortuj po</h3>
                <select onChange={e => props.handleSort(e.target.value)}>
                    <option value="-">-</option>
                    <option value="expensive">od najdroższych</option>
                    <option value="cheap">od najtańszych</option>
                    <option value="alphabetically">alfabetycznie</option>
                    <option value="category">wg kategorii</option>
                </select>
            </form>
        </div>
    )
}