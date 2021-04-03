import React, { Component } from 'react';
import style from "./recipe.module.css";

const Recipe = ({title, calories, img, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h3>{title}</h3>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img src={img} alt=""/>
        </div>
    )
}

export default Recipe;