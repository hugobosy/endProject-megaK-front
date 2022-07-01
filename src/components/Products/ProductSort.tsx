import React, {Dispatch, SetStateAction} from "react";

interface Props {
    handleSort: Dispatch<SetStateAction<string>>,
    sort: string
}

export const ProductSort = (props: Props) => {
    return (
        <div className="Products__sort">
            <form>
                <h3>Sortuj po</h3>
                <select value={props.sort} onChange={e => props.handleSort(e.target.value)}>
                    <option value="-">-</option>
                    <option value="newses">wg najnowszych</option>
                    <option value="alter">wg najstarszych</option>
                    <option value="expensive">od najdroższych</option>
                    <option value="cheap">od najtańszych</option>
                    <option value="alphabetically">alfabetycznie</option>
                    <option value="category">wg kategorii</option>
                </select>
            </form>
        </div>
    )
}