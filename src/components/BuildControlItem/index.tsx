import * as React from 'react';
import './index.css';

export interface BuildControlItemProps {
    type: string;
    count: number;
    onAddIngredient: (ingredientType: string) => void;
    onRemoveIngredient: (ingredientType: string) => void;
}

export const BuildControlItem: React.SFC<BuildControlItemProps> = (props) => {
    return (
        <div className="BuildControl">
            <div className="Label">{props.type}: {props.count}</div>
            <button className="Less" onClick={() => props.onRemoveIngredient(props.type)}>Less</button>
            <button className="More" onClick={() => props.onAddIngredient(props.type)}>More</button>
        </div>
    );
};
