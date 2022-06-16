import React from "react";
import './Category.css';
import {CategoryList} from "../../components/Category/CategoryList";
import {CategoryAddForm} from "../../components/Category/CategoryAddForm";

export const Category = () => {
    return (
        <div className="page">
            <CategoryAddForm/>
            <CategoryList/>
        </div>
    )
}