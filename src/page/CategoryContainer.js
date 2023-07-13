import React from "react";
import './categorycontainer.css'
import { Category } from "../components/Category";

export const CategoryContainer = () => {
    return(
        <div className="category_container">
            <Category></Category>
            <Category></Category>
            <Category></Category>
            <Category></Category>
            <Category></Category>
        </div>
    )
}