import * as React from 'react';
import { PlaceholderParent as Aux } from '../../hoc/PlaceholderParent';
import { Burger } from '../../components/Burger';

export interface BurgerBuilderProps {
}

export class BurgerBuilder extends React.PureComponent<BurgerBuilderProps, any> {
  render() {
    return (
      <Aux>
        <Burger/>
        <div>Build Controls</div>
      </Aux>
    );
  }
}