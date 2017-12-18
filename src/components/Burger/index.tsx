import * as React from 'react';
import { BurgerIngredient } from '../BurgerIngredient';
import './index.css';

interface BurgerProps {
}

export const Burger: React.SFC<BurgerProps> = (props) => {
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};