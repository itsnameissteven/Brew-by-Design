import React, { useState, useEffect } from 'react';
import { getSingleBeer } from '../../apiCalls';
import { GiWheat, GiHops, GiDna2} from "react-icons/gi"
import './Recipe.css'

export const Recipe = ({ id }) => {
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getSingleBeer(id).then(data => setRecipe(...data));
  },[id]);

  const convertToPounds = (value) => {
    const num = value * 2.2046226218;
    return num.toFixed(1);
  }

  const malts = recipe.ingredients?.malt.map((ingredient, index) => {
    const weight = convertToPounds(ingredient.amount.value)
    return (
      <tr className='malt__row' key={index}>
        <td className='ingredient-name'>{ingredient.name}</td>
        <td>{weight}{weight > 1 ? 'lbs' : 'lb'}</td>
        <td>{ingredient.amount.value}kg</td>
      </tr>
    )
  })

  const hops = recipe.ingredients?.hops.map((ingredient, index) => {
    return (
      <tr className='malt__row' key={index}>
        <td className='ingredient-name'>{ingredient.name}</td>
        <td>{ingredient.amount.value}g</td>
        <td>{ingredient?.add}</td>
        <td>{ingredient?.attribute}</td>
      </tr>
    )
  })

  return (
    <div className="recipe">
      <h1 className="recipe__name">{recipe.name}</h1>
      <div className="recipe__stats">
        <p className="recipe__tagline">{recipe.tagline}</p>
        <p className="recipe__abv">ABV<br />{recipe.abv}%</p>
        <p className="recipe__srm">SRM<br />{recipe.srm}</p>
        <p className="recipe__ibu">IBU<br />{recipe.ibu}</p>
      </div>
      <div className="recipe__about">
        <h3 className="recipe__about__header">ABOUT THIS BEER</h3>
        <p className="recipe__about__description">{recipe.description}</p>
      </div>
      <div className="recipe__ingredients">
        <table className="malt-table">
          <thead>
            <tr>
              <th className='table-head'>
              <div className="icon"><GiWheat className="icon__malt"/></div>Malt
              </th>
            </tr>
          </thead>
          <tbody>
            {malts}
          </tbody>
        </table>
        <table className="hop-table">
          <thead>
            <tr>
              <th className='table-head'>
              <div className="icon"><GiHops className="icon__hop"/></div>Hops
              </th>
              <th> Weight</th>
              <th> Schedule</th>
              <th> Attribute</th>
            </tr>
          </thead>
          <tbody>
            {hops}
          </tbody>
        </table>
        <table className="yeast-table">
          <thead>
            <tr>
              <th className='table-head'>
              <div className="icon"><GiDna2 className="icon__yeast"/></div>Yeast
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>{recipe.ingredients.yeast}</tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}