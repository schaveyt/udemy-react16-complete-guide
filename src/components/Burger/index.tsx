import * as React from 'react';
import './index.css';
import { BurgerIngredient } from '../BurgerIngredient';
import { BurgerIngredientsType } from '../../containers/BurderBuilder';

interface BurgerProps {
  ingredients: BurgerIngredientsType;
}

export const Burger: React.SFC<BurgerProps> = (props) => {

  const transformedIngredients = new Array<React.ReactNode>();
  let key = 0;
  
  Object.keys(props.ingredients).forEach((t) => {
    const ingredientCount = props.ingredients[t];
    for (let i = 0; i < ingredientCount; i++) {
      transformedIngredients.push(<BurgerIngredient key={key++} type={t} />);
    }
  });

  if (transformedIngredients.length === 0) {
    transformedIngredients.push(<p>Please select your ingredients.</p>);
  }

  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};