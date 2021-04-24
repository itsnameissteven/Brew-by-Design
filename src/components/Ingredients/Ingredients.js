import React from 'react';
import { GiWheat, GiHops, GiDna2} from "react-icons/gi"
import "./Ingredients.css"

export const Ingredients = ({ ingredients }) => {

  const convertToPounds = (value) => {
    const num = value * 2.2046226218;
    return num.toFixed(1);
  }

  const malts = ingredients.malt.map((ingredient, index) => {
    const weight = convertToPounds(ingredient.amount.value)
    return (
      <tr className='malt__row' key={index}>
        <td className='ingredient-name'>{ingredient.name}</td>
        <td>{weight}{weight > 1 ? 'lbs' : 'lb'}</td>
        <td>{ingredient.amount.value}kg</td>
      </tr>
    )
  })

  const hops = ingredients.hops.map((ingredient, index) => {
    return (
      <tr className='hop__row' key={index}>
        <td className='ingredient-name'>{ingredient.name}</td>
        <td>{ingredient.amount.value}g</td>
        <td>{ingredient?.add}</td>
        <td>{ingredient?.attribute}</td>
      </tr>
    )
  })

  return (
    <div className="ingredients">
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
          <tr className="yeast__row"><td>{ingredients.yeast}</td></tr>
        </tbody>
      </table>
    </div>
  )
}