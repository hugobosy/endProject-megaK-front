import React from "react";

export const ProductSort = () => {
    return (
        <div className="Products__sort">
            <form>
                <h3>Sortuj po</h3>
                <select>
                    <option value="-">-</option>
                    <option value="najnowszych">wg najnowszych</option>
                    <option value="najstarszych">wg najstarszych</option>
                    <option value="najdrozszych">od najdroższych</option>
                    <option value="najtanszych">od najtańszych</option>
                    <option value="alfabetycznie">alfabetycznie</option>
                    <option value="alfabetycznie">wg kategorii</option>
                </select>
            </form>
        </div>
    )
}