import * as React from 'react';
import { PlaceholderParent as Aux } from '../../hoc/PlaceholderParent';
import { Burger } from '../../components/Burger';
import { BuildControl } from '../../components/BuildControl';

export interface BurgerBuilderProps {
}

export interface BurgerIngredientsType {
  salad: number;
  bacon: number;
  cheese: number;
  meat: number;
}

export interface BurgerBuilderState {
  ingredients: BurgerIngredientsType;
}

export class BurgerBuilder extends React.Component<BurgerBuilderProps, BurgerBuilderState> {

  constructor(props: BurgerBuilderProps) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
      }
    };
  }

  addIngredient = (ingredientType: string) => {
    // console.log('add more ' + ingredientType);
    const shallowCopy = {...this.state};
    const oldCount = shallowCopy.ingredients[ingredientType];
    shallowCopy.ingredients[ingredientType] = oldCount + 1;
    this.setState({ingredients: shallowCopy.ingredients});
  }

  removeIngredient = (ingredientType: string) => {
    // console.log('remove more ' + ingredientType);
    const shallowCopy = {...this.state};
    const oldCount = shallowCopy.ingredients[ingredientType];
    shallowCopy.ingredients[ingredientType] = oldCount - 1;
    this.setState(prevState => ({ingredients: shallowCopy.ingredients}));
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControl 
          ingredients={this.state.ingredients}
          onAddIngredient={this.addIngredient}
          onRemoveIngredient={this.removeIngredient}
        />
      </Aux>
    );
  }
}