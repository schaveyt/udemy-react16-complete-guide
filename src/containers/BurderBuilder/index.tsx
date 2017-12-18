import * as React from 'react';
import { PlaceholderParent as Aux } from '../../hoc/PlaceholderParent';
import { Burger } from '../../components/Burger';

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

export class BurgerBuilder extends React.PureComponent<BurgerBuilderProps, BurgerBuilderState> {

  constructor(props: BurgerBuilderProps) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 1,
        cheese: 1,
        meat: 1
      }
    };
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}