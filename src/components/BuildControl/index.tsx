import * as React from 'react';
import './index.css';
import { BurgerIngredientsType } from '../../containers/BurderBuilder';
import { BuildControlItem } from '../BuildControlItem';

interface BurgerControlProps {
    ingredients: BurgerIngredientsType;
    onAddIngredient: (ingredientType: string) => void;
    onRemoveIngredient: (ingredientType: string) => void;
}

export const BuildControl: React.SFC<BurgerControlProps> = (props) => {

    const transformedIngredients = new Array<React.ReactNode>();
    // let key = 0;

    Object.keys(props.ingredients).forEach((t) => {
        const ingredientCount = props.ingredients[t];
        transformedIngredients.push(
            <BuildControlItem 
                type={t} 
                count={ingredientCount}
                onAddIngredient={props.onAddIngredient}
                onRemoveIngredient={props.onRemoveIngredient}
            />
        );
    });

    return (
        <div className="BuildControls">
            {transformedIngredients}
        </div>
    );
};