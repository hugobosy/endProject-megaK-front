import React from "react";

interface Props {
    handleSearch: (e: string) => void
}

export const SearchProduct = (props: Props) => {


    return (
        <form>
            <input type="search" className="SearchForm SearchProduct" placeholder="Znajdź produkt..." onChange={e => props.handleSearch(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))}/>
        </form>
    )
}